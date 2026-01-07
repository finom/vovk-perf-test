import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dnc")
export default class DncController {
  @operation({
    summary: "Get Dnc",
  })
  @get()
  static getDnc = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dnc",
  })
  @post("{id}")
  static createDnc = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
