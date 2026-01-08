import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fwf")
export default class FwfController {
  @operation({
    summary: "Get Fwf",
  })
  @get()
  static getFwf = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fwf",
  })
  @post("{id}")
  static createFwf = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
