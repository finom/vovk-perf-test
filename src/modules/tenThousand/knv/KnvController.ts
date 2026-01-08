import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("knv")
export default class KnvController {
  @operation({
    summary: "Get Knv",
  })
  @get()
  static getKnv = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Knv",
  })
  @post("{id}")
  static createKnv = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
