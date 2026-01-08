import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jpf")
export default class JpfController {
  @operation({
    summary: "Get Jpf",
  })
  @get()
  static getJpf = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jpf",
  })
  @post("{id}")
  static createJpf = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
