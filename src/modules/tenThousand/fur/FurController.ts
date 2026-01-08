import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fur")
export default class FurController {
  @operation({
    summary: "Get Fur",
  })
  @get()
  static getFur = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fur",
  })
  @post("{id}")
  static createFur = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
