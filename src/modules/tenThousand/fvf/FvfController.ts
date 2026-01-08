import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fvf")
export default class FvfController {
  @operation({
    summary: "Get Fvf",
  })
  @get()
  static getFvf = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fvf",
  })
  @post("{id}")
  static createFvf = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
