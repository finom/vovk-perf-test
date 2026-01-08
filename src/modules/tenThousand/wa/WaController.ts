import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("wa")
export default class WaController {
  @operation({
    summary: "Get Wa",
  })
  @get()
  static getWa = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Wa",
  })
  @post("{id}")
  static createWa = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
