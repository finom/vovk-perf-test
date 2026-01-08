import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lgb")
export default class LgbController {
  @operation({
    summary: "Get Lgb",
  })
  @get()
  static getLgb = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lgb",
  })
  @post("{id}")
  static createLgb = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
