import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dpf")
export default class DpfController {
  @operation({
    summary: "Get Dpf",
  })
  @get()
  static getDpf = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dpf",
  })
  @post("{id}")
  static createDpf = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
