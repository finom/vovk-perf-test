import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jpb")
export default class JpbController {
  @operation({
    summary: "Get Jpb",
  })
  @get()
  static getJpb = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jpb",
  })
  @post("{id}")
  static createJpb = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
