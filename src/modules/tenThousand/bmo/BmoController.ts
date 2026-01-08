import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bmo")
export default class BmoController {
  @operation({
    summary: "Get Bmo",
  })
  @get()
  static getBmo = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bmo",
  })
  @post("{id}")
  static createBmo = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
