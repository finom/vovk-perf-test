import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bdv")
export default class BdvController {
  @operation({
    summary: "Get Bdv",
  })
  @get()
  static getBdv = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bdv",
  })
  @post("{id}")
  static createBdv = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
