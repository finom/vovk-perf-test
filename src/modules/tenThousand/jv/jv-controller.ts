import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jv")
export default class JvController {
  @operation({
    summary: "Get Jv",
  })
  @get()
  static getJv = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Jv",
  })
  @post("{id}")
  static createJv = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
