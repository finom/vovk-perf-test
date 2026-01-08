import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ffe")
export default class FfeController {
  @operation({
    summary: "Get Ffe",
  })
  @get()
  static getFfe = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ffe",
  })
  @post("{id}")
  static createFfe = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
