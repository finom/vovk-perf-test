import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lsa")
export default class LsaController {
  @operation({
    summary: "Get Lsa",
  })
  @get()
  static getLsa = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lsa",
  })
  @post("{id}")
  static createLsa = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
