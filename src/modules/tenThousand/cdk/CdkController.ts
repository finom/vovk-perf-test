import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("cdk")
export default class CdkController {
  @operation({
    summary: "Get Cdk",
  })
  @get()
  static getCdk = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cdk",
  })
  @post("{id}")
  static createCdk = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
