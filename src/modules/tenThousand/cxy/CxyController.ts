import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("cxy")
export default class CxyController {
  @operation({
    summary: "Get Cxy",
  })
  @get()
  static getCxy = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cxy",
  })
  @post("{id}")
  static createCxy = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
