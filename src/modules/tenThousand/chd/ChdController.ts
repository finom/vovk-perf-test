import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("chd")
export default class ChdController {
  @operation({
    summary: "Get Chd",
  })
  @get()
  static getChd = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Chd",
  })
  @post("{id}")
  static createChd = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
