import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jfb")
export default class JfbController {
  @operation({
    summary: "Get Jfb",
  })
  @get()
  static getJfb = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Jfb",
  })
  @post("{id}")
  static createJfb = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
