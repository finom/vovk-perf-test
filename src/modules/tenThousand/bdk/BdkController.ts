import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bdk")
export default class BdkController {
  @operation({
    summary: "Get Bdk",
  })
  @get()
  static getBdk = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bdk",
  })
  @post("{id}")
  static createBdk = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
