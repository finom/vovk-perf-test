import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mgb")
export default class MgbController {
  @operation({
    summary: "Get Mgb",
  })
  @get()
  static getMgb = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mgb",
  })
  @post("{id}")
  static createMgb = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
