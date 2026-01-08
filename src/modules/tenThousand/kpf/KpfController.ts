import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("kpf")
export default class KpfController {
  @operation({
    summary: "Get Kpf",
  })
  @get()
  static getKpf = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kpf",
  })
  @post("{id}")
  static createKpf = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
