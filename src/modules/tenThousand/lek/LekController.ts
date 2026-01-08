import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lek")
export default class LekController {
  @operation({
    summary: "Get Lek",
  })
  @get()
  static getLek = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lek",
  })
  @post("{id}")
  static createLek = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
