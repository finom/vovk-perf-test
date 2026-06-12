import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jxb")
export default class JxbController {
  @operation({
    summary: "Get Jxb",
  })
  @get()
  static getJxb = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Jxb",
  })
  @post("{id}")
  static createJxb = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
