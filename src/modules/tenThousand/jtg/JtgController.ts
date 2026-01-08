import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jtg")
export default class JtgController {
  @operation({
    summary: "Get Jtg",
  })
  @get()
  static getJtg = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jtg",
  })
  @post("{id}")
  static createJtg = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
