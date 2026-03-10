import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lm")
export default class LmController {
  @operation({
    summary: "Get Lm",
  })
  @get()
  static getLm = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Lm",
  })
  @post("{id}")
  static createLm = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
