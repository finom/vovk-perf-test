import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fdk")
export default class FdkController {
  @operation({
    summary: "Get Fdk",
  })
  @get()
  static getFdk = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fdk",
  })
  @post("{id}")
  static createFdk = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
