import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("duy")
export default class DuyController {
  @operation({
    summary: "Get Duy",
  })
  @get()
  static getDuy = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Duy",
  })
  @post("{id}")
  static createDuy = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
