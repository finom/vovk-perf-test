import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fpf")
export default class FpfController {
  @operation({
    summary: "Get Fpf",
  })
  @get()
  static getFpf = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fpf",
  })
  @post("{id}")
  static createFpf = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
