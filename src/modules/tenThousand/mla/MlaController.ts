import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mla")
export default class MlaController {
  @operation({
    summary: "Get Mla",
  })
  @get()
  static getMla = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mla",
  })
  @post("{id}")
  static createMla = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
