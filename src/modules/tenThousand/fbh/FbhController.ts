import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fbh")
export default class FbhController {
  @operation({
    summary: "Get Fbh",
  })
  @get()
  static getFbh = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fbh",
  })
  @post("{id}")
  static createFbh = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
