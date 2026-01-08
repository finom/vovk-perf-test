import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dfj")
export default class DfjController {
  @operation({
    summary: "Get Dfj",
  })
  @get()
  static getDfj = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dfj",
  })
  @post("{id}")
  static createDfj = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
