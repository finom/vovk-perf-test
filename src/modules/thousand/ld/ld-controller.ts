import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ld")
export default class LdController {
  @operation({
    summary: "Get Ld",
  })
  @get()
  static getLd = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ld",
  })
  @post("{id}")
  static createLd = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
