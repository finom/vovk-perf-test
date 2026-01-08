import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dqa")
export default class DqaController {
  @operation({
    summary: "Get Dqa",
  })
  @get()
  static getDqa = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dqa",
  })
  @post("{id}")
  static createDqa = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
