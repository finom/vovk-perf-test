import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("nqu")
export default class NquController {
  @operation({
    summary: "Get Nqu",
  })
  @get()
  static getNqu = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Nqu",
  })
  @post("{id}")
  static createNqu = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
