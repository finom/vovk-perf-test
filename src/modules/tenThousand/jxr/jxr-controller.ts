import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jxr")
export default class JxrController {
  @operation({
    summary: "Get Jxr",
  })
  @get()
  static getJxr = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Jxr",
  })
  @post("{id}")
  static createJxr = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
