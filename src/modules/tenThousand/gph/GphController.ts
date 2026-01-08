import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gph")
export default class GphController {
  @operation({
    summary: "Get Gph",
  })
  @get()
  static getGph = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gph",
  })
  @post("{id}")
  static createGph = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
