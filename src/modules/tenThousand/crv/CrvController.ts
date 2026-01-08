import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("crv")
export default class CrvController {
  @operation({
    summary: "Get Crv",
  })
  @get()
  static getCrv = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Crv",
  })
  @post("{id}")
  static createCrv = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
