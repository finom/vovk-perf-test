import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dfw")
export default class DfwController {
  @operation({
    summary: "Get Dfw",
  })
  @get()
  static getDfw = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dfw",
  })
  @post("{id}")
  static createDfw = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
