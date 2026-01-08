import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mly")
export default class MlyController {
  @operation({
    summary: "Get Mly",
  })
  @get()
  static getMly = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mly",
  })
  @post("{id}")
  static createMly = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
