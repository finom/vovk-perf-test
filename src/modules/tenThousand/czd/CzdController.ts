import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("czd")
export default class CzdController {
  @operation({
    summary: "Get Czd",
  })
  @get()
  static getCzd = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Czd",
  })
  @post("{id}")
  static createCzd = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
