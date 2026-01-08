import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mkb")
export default class MkbController {
  @operation({
    summary: "Get Mkb",
  })
  @get()
  static getMkb = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mkb",
  })
  @post("{id}")
  static createMkb = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
