import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("eky")
export default class EkyController {
  @operation({
    summary: "Get Eky",
  })
  @get()
  static getEky = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Eky",
  })
  @post("{id}")
  static createEky = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
