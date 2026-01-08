import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dvr")
export default class DvrController {
  @operation({
    summary: "Get Dvr",
  })
  @get()
  static getDvr = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dvr",
  })
  @post("{id}")
  static createDvr = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
