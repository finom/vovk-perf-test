import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jgt")
export default class JgtController {
  @operation({
    summary: "Get Jgt",
  })
  @get()
  static getJgt = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jgt",
  })
  @post("{id}")
  static createJgt = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
