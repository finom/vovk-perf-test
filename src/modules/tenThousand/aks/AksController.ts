import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("aks")
export default class AksController {
  @operation({
    summary: "Get Aks",
  })
  @get()
  static getAks = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Aks",
  })
  @post("{id}")
  static createAks = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
