import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("egt")
export default class EgtController {
  @operation({
    summary: "Get Egt",
  })
  @get()
  static getEgt = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Egt",
  })
  @post("{id}")
  static createEgt = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
