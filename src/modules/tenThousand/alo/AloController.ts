import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("alo")
export default class AloController {
  @operation({
    summary: "Get Alo",
  })
  @get()
  static getAlo = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Alo",
  })
  @post("{id}")
  static createAlo = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
