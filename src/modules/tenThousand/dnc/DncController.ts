import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dncs")
export default class DncController {
  @operation({
    summary: "Get Dncs",
  })
  @get()
  static getDncs = procedure({
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
