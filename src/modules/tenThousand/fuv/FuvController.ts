import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fuv")
export default class FuvController {
  @operation({
    summary: "Get Fuv",
  })
  @get()
  static getFuv = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fuv",
  })
  @post("{id}")
  static createFuv = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
