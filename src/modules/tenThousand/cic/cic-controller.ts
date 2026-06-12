import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("cic")
export default class CicController {
  @operation({
    summary: "Get Cic",
  })
  @get()
  static getCic = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Cic",
  })
  @post("{id}")
  static createCic = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
