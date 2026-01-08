import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("loo")
export default class LooController {
  @operation({
    summary: "Get Loo",
  })
  @get()
  static getLoo = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Loo",
  })
  @post("{id}")
  static createLoo = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
