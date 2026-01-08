import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dnn")
export default class DnnController {
  @operation({
    summary: "Get Dnn",
  })
  @get()
  static getDnn = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dnn",
  })
  @post("{id}")
  static createDnn = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
