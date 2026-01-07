import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hz")
export default class HzController {
  @operation({
    summary: "Get Hz",
  })
  @get()
  static getHz = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hz",
  })
  @post("{id}")
  static createHz = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
