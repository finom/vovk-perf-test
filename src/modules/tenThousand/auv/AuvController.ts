import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("auv")
export default class AuvController {
  @operation({
    summary: "Get Auv",
  })
  @get()
  static getAuv = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Auv",
  })
  @post("{id}")
  static createAuv = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
