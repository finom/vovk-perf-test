import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lio")
export default class LioController {
  @operation({
    summary: "Get Lio",
  })
  @get()
  static getLio = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lio",
  })
  @post("{id}")
  static createLio = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
