import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fmf")
export default class FmfController {
  @operation({
    summary: "Get Fmf",
  })
  @get()
  static getFmf = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fmf",
  })
  @post("{id}")
  static createFmf = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
