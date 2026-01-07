import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cwx")
export default class CwxController {
  @operation({
    summary: "Get Cwx",
  })
  @get()
  static getCwx = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cwx",
  })
  @post("{id}")
  static createCwx = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
