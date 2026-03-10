import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("cis")
export default class CisController {
  @operation({
    summary: "Get Cis",
  })
  @get()
  static getCis = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Cis",
  })
  @post("{id}")
  static createCis = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
