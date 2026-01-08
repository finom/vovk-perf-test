import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("qq")
export default class QqController {
  @operation({
    summary: "Get Qq",
  })
  @get()
  static getQq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Qq",
  })
  @post("{id}")
  static createQq = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
