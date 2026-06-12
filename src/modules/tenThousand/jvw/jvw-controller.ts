import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jvw")
export default class JvwController {
  @operation({
    summary: "Get Jvw",
  })
  @get()
  static getJvw = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Jvw",
  })
  @post("{id}")
  static createJvw = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
