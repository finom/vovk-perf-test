import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jxw")
export default class JxwController {
  @operation({
    summary: "Get Jxw",
  })
  @get()
  static getJxw = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Jxw",
  })
  @post("{id}")
  static createJxw = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
