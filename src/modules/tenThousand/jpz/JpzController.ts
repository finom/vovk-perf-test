import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jpz")
export default class JpzController {
  @operation({
    summary: "Get Jpz",
  })
  @get()
  static getJpz = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jpz",
  })
  @post("{id}")
  static createJpz = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
