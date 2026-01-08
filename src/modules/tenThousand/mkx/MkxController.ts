import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mkx")
export default class MkxController {
  @operation({
    summary: "Get Mkx",
  })
  @get()
  static getMkx = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mkx",
  })
  @post("{id}")
  static createMkx = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
