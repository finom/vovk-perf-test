import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bhl")
export default class BhlController {
  @operation({
    summary: "Get Bhl",
  })
  @get()
  static getBhl = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bhl",
  })
  @post("{id}")
  static createBhl = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
