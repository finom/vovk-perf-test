import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lqm")
export default class LqmController {
  @operation({
    summary: "Get Lqm",
  })
  @get()
  static getLqm = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lqm",
  })
  @post("{id}")
  static createLqm = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
