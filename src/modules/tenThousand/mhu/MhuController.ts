import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mhu")
export default class MhuController {
  @operation({
    summary: "Get Mhu",
  })
  @get()
  static getMhu = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mhu",
  })
  @post("{id}")
  static createMhu = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
