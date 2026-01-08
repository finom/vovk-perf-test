import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("cim")
export default class CimController {
  @operation({
    summary: "Get Cim",
  })
  @get()
  static getCim = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cim",
  })
  @post("{id}")
  static createCim = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
