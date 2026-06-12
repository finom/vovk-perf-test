import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jnv")
export default class JnvController {
  @operation({
    summary: "Get Jnv",
  })
  @get()
  static getJnv = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Jnv",
  })
  @post("{id}")
  static createJnv = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
