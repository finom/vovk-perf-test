import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("evo")
export default class EvoController {
  @operation({
    summary: "Get Evo",
  })
  @get()
  static getEvo = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Evo",
  })
  @post("{id}")
  static createEvo = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
