import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fgt")
export default class FgtController {
  @operation({
    summary: "Get Fgt",
  })
  @get()
  static getFgt = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fgt",
  })
  @post("{id}")
  static createFgt = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
