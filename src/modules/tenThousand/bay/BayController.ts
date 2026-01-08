import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bay")
export default class BayController {
  @operation({
    summary: "Get Bay",
  })
  @get()
  static getBay = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bay",
  })
  @post("{id}")
  static createBay = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
