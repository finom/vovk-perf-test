import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("caa")
export default class CaaController {
  @operation({
    summary: "Get Caa",
  })
  @get()
  static getCaa = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Caa",
  })
  @post("{id}")
  static createCaa = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
