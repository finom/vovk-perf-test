import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jno")
export default class JnoController {
  @operation({
    summary: "Get Jno",
  })
  @get()
  static getJno = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jno",
  })
  @post("{id}")
  static createJno = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
