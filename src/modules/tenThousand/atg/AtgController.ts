import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("atg")
export default class AtgController {
  @operation({
    summary: "Get Atg",
  })
  @get()
  static getAtg = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Atg",
  })
  @post("{id}")
  static createAtg = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
