import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ceb")
export default class CebController {
  @operation({
    summary: "Get Ceb",
  })
  @get()
  static getCeb = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ceb",
  })
  @post("{id}")
  static createCeb = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
