import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jwe")
export default class JweController {
  @operation({
    summary: "Get Jwe",
  })
  @get()
  static getJwe = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Jwe",
  })
  @post("{id}")
  static createJwe = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
