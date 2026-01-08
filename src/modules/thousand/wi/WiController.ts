import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("wi")
export default class WiController {
  @operation({
    summary: "Get Wi",
  })
  @get()
  static getWi = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Wi",
  })
  @post("{id}")
  static createWi = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
