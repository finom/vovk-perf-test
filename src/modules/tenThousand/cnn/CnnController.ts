import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("cnn")
export default class CnnController {
  @operation({
    summary: "Get Cnn",
  })
  @get()
  static getCnn = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cnn",
  })
  @post("{id}")
  static createCnn = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
