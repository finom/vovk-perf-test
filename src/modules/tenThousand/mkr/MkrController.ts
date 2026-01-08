import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mkr")
export default class MkrController {
  @operation({
    summary: "Get Mkr",
  })
  @get()
  static getMkr = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mkr",
  })
  @post("{id}")
  static createMkr = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
