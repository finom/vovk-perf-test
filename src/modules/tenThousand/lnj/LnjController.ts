import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lnj")
export default class LnjController {
  @operation({
    summary: "Get Lnj",
  })
  @get()
  static getLnj = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lnj",
  })
  @post("{id}")
  static createLnj = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
