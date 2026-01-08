import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("npf")
export default class NpfController {
  @operation({
    summary: "Get Npf",
  })
  @get()
  static getNpf = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Npf",
  })
  @post("{id}")
  static createNpf = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
