import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("kcl")
export default class KclController {
  @operation({
    summary: "Get Kcl",
  })
  @get()
  static getKcl = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kcl",
  })
  @post("{id}")
  static createKcl = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
