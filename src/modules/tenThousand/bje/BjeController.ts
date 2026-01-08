import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bje")
export default class BjeController {
  @operation({
    summary: "Get Bje",
  })
  @get()
  static getBje = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bje",
  })
  @post("{id}")
  static createBje = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
