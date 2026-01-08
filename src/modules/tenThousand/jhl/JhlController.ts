import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jhl")
export default class JhlController {
  @operation({
    summary: "Get Jhl",
  })
  @get()
  static getJhl = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jhl",
  })
  @post("{id}")
  static createJhl = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
