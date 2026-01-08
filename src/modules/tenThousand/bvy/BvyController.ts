import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bvy")
export default class BvyController {
  @operation({
    summary: "Get Bvy",
  })
  @get()
  static getBvy = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bvy",
  })
  @post("{id}")
  static createBvy = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
