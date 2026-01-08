import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jpu")
export default class JpuController {
  @operation({
    summary: "Get Jpu",
  })
  @get()
  static getJpu = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jpu",
  })
  @post("{id}")
  static createJpu = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
