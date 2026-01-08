import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mjo")
export default class MjoController {
  @operation({
    summary: "Get Mjo",
  })
  @get()
  static getMjo = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mjo",
  })
  @post("{id}")
  static createMjo = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
