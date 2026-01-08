import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("czb")
export default class CzbController {
  @operation({
    summary: "Get Czb",
  })
  @get()
  static getCzb = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Czb",
  })
  @post("{id}")
  static createCzb = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
