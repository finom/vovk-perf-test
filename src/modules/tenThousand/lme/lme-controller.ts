import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lme")
export default class LmeController {
  @operation({
    summary: "Get Lme",
  })
  @get()
  static getLme = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Lme",
  })
  @post("{id}")
  static createLme = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
