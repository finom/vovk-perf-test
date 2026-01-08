import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fz")
export default class FzController {
  @operation({
    summary: "Get Fz",
  })
  @get()
  static getFz = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fz",
  })
  @post("{id}")
  static createFz = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
