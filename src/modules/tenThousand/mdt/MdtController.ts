import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mdt")
export default class MdtController {
  @operation({
    summary: "Get Mdt",
  })
  @get()
  static getMdt = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mdt",
  })
  @post("{id}")
  static createMdt = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
