import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jiy")
export default class JiyController {
  @operation({
    summary: "Get Jiy",
  })
  @get()
  static getJiy = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Jiy",
  })
  @post("{id}")
  static createJiy = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
