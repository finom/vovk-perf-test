import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mwv")
export default class MwvController {
  @operation({
    summary: "Get Mwv",
  })
  @get()
  static getMwv = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mwv",
  })
  @post("{id}")
  static createMwv = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
