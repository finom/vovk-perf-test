import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lui")
export default class LuiController {
  @operation({
    summary: "Get Lui",
  })
  @get()
  static getLui = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lui",
  })
  @post("{id}")
  static createLui = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
