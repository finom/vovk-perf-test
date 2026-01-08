import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lpu")
export default class LpuController {
  @operation({
    summary: "Get Lpu",
  })
  @get()
  static getLpu = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lpu",
  })
  @post("{id}")
  static createLpu = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
