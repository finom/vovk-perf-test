import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fwh")
export default class FwhController {
  @operation({
    summary: "Get Fwh",
  })
  @get()
  static getFwh = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fwh",
  })
  @post("{id}")
  static createFwh = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
