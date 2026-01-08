import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ctp")
export default class CtpController {
  @operation({
    summary: "Get Ctp",
  })
  @get()
  static getCtp = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ctp",
  })
  @post("{id}")
  static createCtp = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
