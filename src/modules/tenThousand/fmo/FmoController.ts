import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fmo")
export default class FmoController {
  @operation({
    summary: "Get Fmo",
  })
  @get()
  static getFmo = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fmo",
  })
  @post("{id}")
  static createFmo = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
