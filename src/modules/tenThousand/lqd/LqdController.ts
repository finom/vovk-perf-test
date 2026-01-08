import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lqd")
export default class LqdController {
  @operation({
    summary: "Get Lqd",
  })
  @get()
  static getLqd = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lqd",
  })
  @post("{id}")
  static createLqd = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
