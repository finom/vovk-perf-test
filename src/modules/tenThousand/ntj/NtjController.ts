import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ntj")
export default class NtjController {
  @operation({
    summary: "Get Ntj",
  })
  @get()
  static getNtj = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ntj",
  })
  @post("{id}")
  static createNtj = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
