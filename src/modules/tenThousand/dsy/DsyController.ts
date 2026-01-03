import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dsies")
export default class DsyController {
  @operation({
    summary: "Get Dsies",
  })
  @get()
  static getDsies = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dsy",
  })
  @post("{id}")
  static createDsy = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
