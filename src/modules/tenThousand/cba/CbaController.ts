import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("cba")
export default class CbaController {
  @operation({
    summary: "Get Cba",
  })
  @get()
  static getCba = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cba",
  })
  @post("{id}")
  static createCba = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
