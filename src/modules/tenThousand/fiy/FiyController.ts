import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fiy")
export default class FiyController {
  @operation({
    summary: "Get Fiy",
  })
  @get()
  static getFiy = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fiy",
  })
  @post("{id}")
  static createFiy = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
