import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jvg")
export default class JvgController {
  @operation({
    summary: "Get Jvg",
  })
  @get()
  static getJvg = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Jvg",
  })
  @post("{id}")
  static createJvg = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
