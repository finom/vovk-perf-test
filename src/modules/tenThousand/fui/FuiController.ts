import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fui")
export default class FuiController {
  @operation({
    summary: "Get Fui",
  })
  @get()
  static getFui = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fui",
  })
  @post("{id}")
  static createFui = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
