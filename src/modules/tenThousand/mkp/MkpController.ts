import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mkp")
export default class MkpController {
  @operation({
    summary: "Get Mkp",
  })
  @get()
  static getMkp = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mkp",
  })
  @post("{id}")
  static createMkp = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
