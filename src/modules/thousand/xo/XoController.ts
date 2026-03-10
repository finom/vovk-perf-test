import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("xo")
export default class XoController {
  @operation({
    summary: "Get Xo",
  })
  @get()
  static getXo = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Xo",
  })
  @post("{id}")
  static createXo = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
