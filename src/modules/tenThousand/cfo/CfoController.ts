import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("cfo")
export default class CfoController {
  @operation({
    summary: "Get Cfo",
  })
  @get()
  static getCfo = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cfo",
  })
  @post("{id}")
  static createCfo = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
