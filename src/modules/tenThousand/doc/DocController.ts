import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("doc")
export default class DocController {
  @operation({
    summary: "Get Doc",
  })
  @get()
  static getDoc = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Doc",
  })
  @post("{id}")
  static createDoc = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
