import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bbl")
export default class BblController {
  @operation({
    summary: "Get Bbl",
  })
  @get()
  static getBbl = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bbl",
  })
  @post("{id}")
  static createBbl = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
