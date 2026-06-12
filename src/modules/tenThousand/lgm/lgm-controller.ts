import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lgm")
export default class LgmController {
  @operation({
    summary: "Get Lgm",
  })
  @get()
  static getLgm = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Lgm",
  })
  @post("{id}")
  static createLgm = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
