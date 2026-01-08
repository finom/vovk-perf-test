import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dnb")
export default class DnbController {
  @operation({
    summary: "Get Dnb",
  })
  @get()
  static getDnb = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dnb",
  })
  @post("{id}")
  static createDnb = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
