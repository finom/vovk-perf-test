import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dews")
export default class DewController {
  @operation({
    summary: "Get Dews",
  })
  @get()
  static getDews = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dew",
  })
  @post("{id}")
  static createDew = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
