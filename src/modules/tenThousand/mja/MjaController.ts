import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mja")
export default class MjaController {
  @operation({
    summary: "Get Mja",
  })
  @get()
  static getMja = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mja",
  })
  @post("{id}")
  static createMja = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
