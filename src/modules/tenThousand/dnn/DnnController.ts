import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dnn")
export default class DnnController {
  @operation({
    summary: "Get Dnn",
  })
  @get()
  static getDnn = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dnn",
  })
  @post("{id}")
  static createDnn = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
