import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mkz")
export default class MkzController {
  @operation({
    summary: "Get Mkz",
  })
  @get()
  static getMkz = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mkz",
  })
  @post("{id}")
  static createMkz = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
