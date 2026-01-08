import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dhi")
export default class DhiController {
  @operation({
    summary: "Get Dhi",
  })
  @get()
  static getDhi = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dhi",
  })
  @post("{id}")
  static createDhi = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
