import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cwj")
export default class CwjController {
  @operation({
    summary: "Get Cwj",
  })
  @get()
  static getCwj = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cwj",
  })
  @post("{id}")
  static createCwj = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
