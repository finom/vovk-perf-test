import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ddn")
export default class DdnController {
  @operation({
    summary: "Get Ddn",
  })
  @get()
  static getDdn = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ddn",
  })
  @post("{id}")
  static createDdn = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
