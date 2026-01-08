import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hgb")
export default class HgbController {
  @operation({
    summary: "Get Hgb",
  })
  @get()
  static getHgb = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hgb",
  })
  @post("{id}")
  static createHgb = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
