import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dpu")
export default class DpuController {
  @operation({
    summary: "Get Dpu",
  })
  @get()
  static getDpu = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dpu",
  })
  @post("{id}")
  static createDpu = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
