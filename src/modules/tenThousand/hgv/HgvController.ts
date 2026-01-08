import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hgv")
export default class HgvController {
  @operation({
    summary: "Get Hgv",
  })
  @get()
  static getHgv = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hgv",
  })
  @post("{id}")
  static createHgv = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
