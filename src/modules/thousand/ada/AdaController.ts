import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ada")
export default class AdaController {
  @operation({
    summary: "Get Ada",
  })
  @get()
  static getAda = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ada",
  })
  @post("{id}")
  static createAda = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
