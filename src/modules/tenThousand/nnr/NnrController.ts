import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("nnr")
export default class NnrController {
  @operation({
    summary: "Get Nnr",
  })
  @get()
  static getNnr = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Nnr",
  })
  @post("{id}")
  static createNnr = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
