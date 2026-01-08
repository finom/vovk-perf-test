import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lsi")
export default class LsiController {
  @operation({
    summary: "Get Lsi",
  })
  @get()
  static getLsi = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lsi",
  })
  @post("{id}")
  static createLsi = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
