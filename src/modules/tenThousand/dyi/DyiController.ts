import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dyi")
export default class DyiController {
  @operation({
    summary: "Get Dyi",
  })
  @get()
  static getDyi = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dyi",
  })
  @post("{id}")
  static createDyi = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
