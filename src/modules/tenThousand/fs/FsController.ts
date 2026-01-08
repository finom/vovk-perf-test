import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fs")
export default class FsController {
  @operation({
    summary: "Get Fs",
  })
  @get()
  static getFs = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fs",
  })
  @post("{id}")
  static createFs = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
