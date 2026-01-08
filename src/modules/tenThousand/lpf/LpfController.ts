import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lpf")
export default class LpfController {
  @operation({
    summary: "Get Lpf",
  })
  @get()
  static getLpf = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lpf",
  })
  @post("{id}")
  static createLpf = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
