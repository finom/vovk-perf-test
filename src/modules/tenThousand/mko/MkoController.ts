import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mko")
export default class MkoController {
  @operation({
    summary: "Get Mko",
  })
  @get()
  static getMko = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mko",
  })
  @post("{id}")
  static createMko = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
