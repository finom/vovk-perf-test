import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("moj")
export default class MojController {
  @operation({
    summary: "Get Moj",
  })
  @get()
  static getMoj = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Moj",
  })
  @post("{id}")
  static createMoj = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
