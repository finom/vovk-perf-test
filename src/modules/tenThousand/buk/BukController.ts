import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("buk")
export default class BukController {
  @operation({
    summary: "Get Buk",
  })
  @get()
  static getBuk = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Buk",
  })
  @post("{id}")
  static createBuk = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
