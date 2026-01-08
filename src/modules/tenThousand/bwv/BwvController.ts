import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bwv")
export default class BwvController {
  @operation({
    summary: "Get Bwv",
  })
  @get()
  static getBwv = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bwv",
  })
  @post("{id}")
  static createBwv = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
