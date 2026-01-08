import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("cgt")
export default class CgtController {
  @operation({
    summary: "Get Cgt",
  })
  @get()
  static getCgt = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cgt",
  })
  @post("{id}")
  static createCgt = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
