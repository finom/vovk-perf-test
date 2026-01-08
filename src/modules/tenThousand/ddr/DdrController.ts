import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ddr")
export default class DdrController {
  @operation({
    summary: "Get Ddr",
  })
  @get()
  static getDdr = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ddr",
  })
  @post("{id}")
  static createDdr = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
