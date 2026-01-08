import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("cmi")
export default class CmiController {
  @operation({
    summary: "Get Cmi",
  })
  @get()
  static getCmi = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cmi",
  })
  @post("{id}")
  static createCmi = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
