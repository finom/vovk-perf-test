import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jfn")
export default class JfnController {
  @operation({
    summary: "Get Jfn",
  })
  @get()
  static getJfn = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Jfn",
  })
  @post("{id}")
  static createJfn = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
