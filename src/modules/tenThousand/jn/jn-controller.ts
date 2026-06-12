import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jn")
export default class JnController {
  @operation({
    summary: "Get Jn",
  })
  @get()
  static getJn = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Jn",
  })
  @post("{id}")
  static createJn = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
