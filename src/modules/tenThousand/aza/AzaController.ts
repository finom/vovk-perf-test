import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("aza")
export default class AzaController {
  @operation({
    summary: "Get Aza",
  })
  @get()
  static getAza = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Aza",
  })
  @post("{id}")
  static createAza = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
