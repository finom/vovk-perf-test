import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mdk")
export default class MdkController {
  @operation({
    summary: "Get Mdk",
  })
  @get()
  static getMdk = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mdk",
  })
  @post("{id}")
  static createMdk = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
