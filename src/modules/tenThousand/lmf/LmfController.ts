import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lmf")
export default class LmfController {
  @operation({
    summary: "Get Lmf",
  })
  @get()
  static getLmf = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lmf",
  })
  @post("{id}")
  static createLmf = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
