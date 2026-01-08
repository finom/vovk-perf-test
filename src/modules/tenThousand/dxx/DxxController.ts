import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dxx")
export default class DxxController {
  @operation({
    summary: "Get Dxx",
  })
  @get()
  static getDxx = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dxx",
  })
  @post("{id}")
  static createDxx = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
