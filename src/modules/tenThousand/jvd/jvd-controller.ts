import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jvd")
export default class JvdController {
  @operation({
    summary: "Get Jvd",
  })
  @get()
  static getJvd = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Jvd",
  })
  @post("{id}")
  static createJvd = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
