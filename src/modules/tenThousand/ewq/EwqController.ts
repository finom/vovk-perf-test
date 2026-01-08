import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ewq")
export default class EwqController {
  @operation({
    summary: "Get Ewq",
  })
  @get()
  static getEwq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ewq",
  })
  @post("{id}")
  static createEwq = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
