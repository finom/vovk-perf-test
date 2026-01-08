import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("auw")
export default class AuwController {
  @operation({
    summary: "Get Auw",
  })
  @get()
  static getAuw = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Auw",
  })
  @post("{id}")
  static createAuw = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
