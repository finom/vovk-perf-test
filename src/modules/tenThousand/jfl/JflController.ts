import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jfl")
export default class JflController {
  @operation({
    summary: "Get Jfl",
  })
  @get()
  static getJfl = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jfl",
  })
  @post("{id}")
  static createJfl = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
