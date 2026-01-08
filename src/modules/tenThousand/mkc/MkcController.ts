import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mkc")
export default class MkcController {
  @operation({
    summary: "Get Mkc",
  })
  @get()
  static getMkc = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mkc",
  })
  @post("{id}")
  static createMkc = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
