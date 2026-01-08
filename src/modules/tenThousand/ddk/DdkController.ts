import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ddk")
export default class DdkController {
  @operation({
    summary: "Get Ddk",
  })
  @get()
  static getDdk = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ddk",
  })
  @post("{id}")
  static createDdk = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
