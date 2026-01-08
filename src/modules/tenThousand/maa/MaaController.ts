import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("maa")
export default class MaaController {
  @operation({
    summary: "Get Maa",
  })
  @get()
  static getMaa = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Maa",
  })
  @post("{id}")
  static createMaa = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
