import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ixm")
export default class IxmController {
  @operation({
    summary: "Get Ixm",
  })
  @get()
  static getIxm = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ixm",
  })
  @post("{id}")
  static createIxm = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
