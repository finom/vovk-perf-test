import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("cbb")
export default class CbbController {
  @operation({
    summary: "Get Cbb",
  })
  @get()
  static getCbb = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cbb",
  })
  @post("{id}")
  static createCbb = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
