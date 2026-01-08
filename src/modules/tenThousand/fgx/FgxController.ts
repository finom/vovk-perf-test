import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fgx")
export default class FgxController {
  @operation({
    summary: "Get Fgx",
  })
  @get()
  static getFgx = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fgx",
  })
  @post("{id}")
  static createFgx = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
