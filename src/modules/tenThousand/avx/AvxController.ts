import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("avx")
export default class AvxController {
  @operation({
    summary: "Get Avx",
  })
  @get()
  static getAvx = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Avx",
  })
  @post("{id}")
  static createAvx = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
