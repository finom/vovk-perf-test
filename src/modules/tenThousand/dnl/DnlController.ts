import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dnl")
export default class DnlController {
  @operation({
    summary: "Get Dnl",
  })
  @get()
  static getDnl = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dnl",
  })
  @post("{id}")
  static createDnl = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
