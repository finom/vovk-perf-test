import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("rg")
export default class RgController {
  @operation({
    summary: "Get Rg",
  })
  @get()
  static getRg = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Rg",
  })
  @post("{id}")
  static createRg = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
