import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("cwp")
export default class CwpController {
  @operation({
    summary: "Get Cwp",
  })
  @get()
  static getCwp = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cwp",
  })
  @post("{id}")
  static createCwp = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
