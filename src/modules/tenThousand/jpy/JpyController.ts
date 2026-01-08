import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jpy")
export default class JpyController {
  @operation({
    summary: "Get Jpy",
  })
  @get()
  static getJpy = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jpy",
  })
  @post("{id}")
  static createJpy = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
