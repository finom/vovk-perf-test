import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hb")
export default class HbController {
  @operation({
    summary: "Get Hb",
  })
  @get()
  static getHb = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hb",
  })
  @post("{id}")
  static createHb = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
