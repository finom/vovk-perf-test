import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ete")
export default class EteController {
  @operation({
    summary: "Get Ete",
  })
  @get()
  static getEte = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ete",
  })
  @post("{id}")
  static createEte = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
