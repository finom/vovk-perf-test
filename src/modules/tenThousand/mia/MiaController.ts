import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mia")
export default class MiaController {
  @operation({
    summary: "Get Mia",
  })
  @get()
  static getMia = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mia",
  })
  @post("{id}")
  static createMia = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
