import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("cwf")
export default class CwfController {
  @operation({
    summary: "Get Cwf",
  })
  @get()
  static getCwf = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cwf",
  })
  @post("{id}")
  static createCwf = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
