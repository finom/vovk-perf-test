import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("eza")
export default class EzaController {
  @operation({
    summary: "Get Eza",
  })
  @get()
  static getEza = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Eza",
  })
  @post("{id}")
  static createEza = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
