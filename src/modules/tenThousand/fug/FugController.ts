import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fug")
export default class FugController {
  @operation({
    summary: "Get Fug",
  })
  @get()
  static getFug = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fug",
  })
  @post("{id}")
  static createFug = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
