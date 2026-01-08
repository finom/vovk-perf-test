import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fpo")
export default class FpoController {
  @operation({
    summary: "Get Fpo",
  })
  @get()
  static getFpo = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fpo",
  })
  @post("{id}")
  static createFpo = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
