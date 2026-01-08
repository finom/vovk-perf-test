import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ndk")
export default class NdkController {
  @operation({
    summary: "Get Ndk",
  })
  @get()
  static getNdk = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ndk",
  })
  @post("{id}")
  static createNdk = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
