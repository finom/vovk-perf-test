import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fx")
export default class FxController {
  @operation({
    summary: "Get Fx",
  })
  @get()
  static getFx = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fx",
  })
  @post("{id}")
  static createFx = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
