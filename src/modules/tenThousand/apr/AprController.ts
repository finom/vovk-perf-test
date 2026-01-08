import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("apr")
export default class AprController {
  @operation({
    summary: "Get Apr",
  })
  @get()
  static getApr = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Apr",
  })
  @post("{id}")
  static createApr = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
