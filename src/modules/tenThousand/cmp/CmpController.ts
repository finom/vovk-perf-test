import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("cmp")
export default class CmpController {
  @operation({
    summary: "Get Cmp",
  })
  @get()
  static getCmp = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Cmp",
  })
  @post("{id}")
  static createCmp = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
