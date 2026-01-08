import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("czm")
export default class CzmController {
  @operation({
    summary: "Get Czm",
  })
  @get()
  static getCzm = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Czm",
  })
  @post("{id}")
  static createCzm = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
