import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dky")
export default class DkyController {
  @operation({
    summary: "Get Dky",
  })
  @get()
  static getDky = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dky",
  })
  @post("{id}")
  static createDky = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
