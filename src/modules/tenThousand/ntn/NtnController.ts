import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ntn")
export default class NtnController {
  @operation({
    summary: "Get Ntn",
  })
  @get()
  static getNtn = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ntn",
  })
  @post("{id}")
  static createNtn = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
