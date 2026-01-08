import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("muj")
export default class MujController {
  @operation({
    summary: "Get Muj",
  })
  @get()
  static getMuj = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Muj",
  })
  @post("{id}")
  static createMuj = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
