import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ewg")
export default class EwgController {
  @operation({
    summary: "Get Ewg",
  })
  @get()
  static getEwg = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ewg",
  })
  @post("{id}")
  static createEwg = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
