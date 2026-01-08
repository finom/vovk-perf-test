import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bwb")
export default class BwbController {
  @operation({
    summary: "Get Bwb",
  })
  @get()
  static getBwb = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bwb",
  })
  @post("{id}")
  static createBwb = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
