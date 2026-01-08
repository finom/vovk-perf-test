import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ggt")
export default class GgtController {
  @operation({
    summary: "Get Ggt",
  })
  @get()
  static getGgt = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ggt",
  })
  @post("{id}")
  static createGgt = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
