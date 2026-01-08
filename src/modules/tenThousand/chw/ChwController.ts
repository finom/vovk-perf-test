import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("chw")
export default class ChwController {
  @operation({
    summary: "Get Chw",
  })
  @get()
  static getChw = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Chw",
  })
  @post("{id}")
  static createChw = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
