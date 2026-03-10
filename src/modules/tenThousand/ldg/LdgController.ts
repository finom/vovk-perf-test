import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ldg")
export default class LdgController {
  @operation({
    summary: "Get Ldg",
  })
  @get()
  static getLdg = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ldg",
  })
  @post("{id}")
  static createLdg = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
