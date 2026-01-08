import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jkh")
export default class JkhController {
  @operation({
    summary: "Get Jkh",
  })
  @get()
  static getJkh = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jkh",
  })
  @post("{id}")
  static createJkh = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
