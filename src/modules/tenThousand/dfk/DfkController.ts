import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dfk")
export default class DfkController {
  @operation({
    summary: "Get Dfk",
  })
  @get()
  static getDfk = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dfk",
  })
  @post("{id}")
  static createDfk = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
