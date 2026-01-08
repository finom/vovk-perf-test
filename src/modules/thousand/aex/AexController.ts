import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("aex")
export default class AexController {
  @operation({
    summary: "Get Aex",
  })
  @get()
  static getAex = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Aex",
  })
  @post("{id}")
  static createAex = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
