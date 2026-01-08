import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jin")
export default class JinController {
  @operation({
    summary: "Get Jin",
  })
  @get()
  static getJin = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jin",
  })
  @post("{id}")
  static createJin = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
