import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mbl")
export default class MblController {
  @operation({
    summary: "Get Mbl",
  })
  @get()
  static getMbl = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mbl",
  })
  @post("{id}")
  static createMbl = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
