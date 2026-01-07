import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mcq")
export default class McqController {
  @operation({
    summary: "Get Mcq",
  })
  @get()
  static getMcq = procedure({
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
