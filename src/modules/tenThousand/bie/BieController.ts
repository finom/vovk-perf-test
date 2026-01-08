import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bie")
export default class BieController {
  @operation({
    summary: "Get Bie",
  })
  @get()
  static getBie = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bie",
  })
  @post("{id}")
  static createBie = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
