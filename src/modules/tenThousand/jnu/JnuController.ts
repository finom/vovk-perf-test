import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jnu")
export default class JnuController {
  @operation({
    summary: "Get Jnu",
  })
  @get()
  static getJnu = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Jnu",
  })
  @post("{id}")
  static createJnu = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
