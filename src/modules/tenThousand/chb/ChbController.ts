import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("chb")
export default class ChbController {
  @operation({
    summary: "Get Chb",
  })
  @get()
  static getChb = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Chb",
  })
  @post("{id}")
  static createChb = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
