import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mcqs")
export default class McqController {
  @operation({
    summary: "Get Mcqs",
  })
  @get()
  static getMcqs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mcq",
  })
  @post("{id}")
  static createMcq = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
