import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("eha")
export default class EhaController {
  @operation({
    summary: "Get Eha",
  })
  @get()
  static getEha = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Eha",
  })
  @post("{id}")
  static createEha = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
