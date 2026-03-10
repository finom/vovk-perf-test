import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jfx")
export default class JfxController {
  @operation({
    summary: "Get Jfx",
  })
  @get()
  static getJfx = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Jfx",
  })
  @post("{id}")
  static createJfx = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
