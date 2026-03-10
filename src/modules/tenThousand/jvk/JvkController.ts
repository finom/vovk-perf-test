import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jvk")
export default class JvkController {
  @operation({
    summary: "Get Jvk",
  })
  @get()
  static getJvk = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Jvk",
  })
  @post("{id}")
  static createJvk = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
