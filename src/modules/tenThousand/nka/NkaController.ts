import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("nka")
export default class NkaController {
  @operation({
    summary: "Get Nka",
  })
  @get()
  static getNka = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Nka",
  })
  @post("{id}")
  static createNka = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
