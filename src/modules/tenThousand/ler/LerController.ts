import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ler")
export default class LerController {
  @operation({
    summary: "Get Ler",
  })
  @get()
  static getLer = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ler",
  })
  @post("{id}")
  static createLer = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
