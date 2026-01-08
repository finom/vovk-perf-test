import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("clv")
export default class ClvController {
  @operation({
    summary: "Get Clv",
  })
  @get()
  static getClv = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Clv",
  })
  @post("{id}")
  static createClv = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
