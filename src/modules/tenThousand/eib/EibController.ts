import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("eib")
export default class EibController {
  @operation({
    summary: "Get Eib",
  })
  @get()
  static getEib = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Eib",
  })
  @post("{id}")
  static createEib = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
