import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mgs")
export default class MgsController {
  @operation({
    summary: "Get Mgs",
  })
  @get()
  static getMgs = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mgs",
  })
  @post("{id}")
  static createMgs = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
