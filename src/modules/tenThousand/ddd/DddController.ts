import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ddd")
export default class DddController {
  @operation({
    summary: "Get Ddd",
  })
  @get()
  static getDdd = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ddd",
  })
  @post("{id}")
  static createDdd = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
