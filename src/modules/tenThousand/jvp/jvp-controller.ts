import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jvp")
export default class JvpController {
  @operation({
    summary: "Get Jvp",
  })
  @get()
  static getJvp = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Jvp",
  })
  @post("{id}")
  static createJvp = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
