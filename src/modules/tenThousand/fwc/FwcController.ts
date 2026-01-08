import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fwc")
export default class FwcController {
  @operation({
    summary: "Get Fwc",
  })
  @get()
  static getFwc = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fwc",
  })
  @post("{id}")
  static createFwc = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
