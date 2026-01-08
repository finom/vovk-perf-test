import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ewb")
export default class EwbController {
  @operation({
    summary: "Get Ewb",
  })
  @get()
  static getEwb = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ewb",
  })
  @post("{id}")
  static createEwb = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
