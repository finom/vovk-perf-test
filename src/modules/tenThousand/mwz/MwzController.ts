import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mwz")
export default class MwzController {
  @operation({
    summary: "Get Mwz",
  })
  @get()
  static getMwz = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mwz",
  })
  @post("{id}")
  static createMwz = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
