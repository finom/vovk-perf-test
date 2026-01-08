import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("kgb")
export default class KgbController {
  @operation({
    summary: "Get Kgb",
  })
  @get()
  static getKgb = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kgb",
  })
  @post("{id}")
  static createKgb = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
