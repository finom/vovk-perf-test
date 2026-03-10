import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jvz")
export default class JvzController {
  @operation({
    summary: "Get Jvz",
  })
  @get()
  static getJvz = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Jvz",
  })
  @post("{id}")
  static createJvz = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
