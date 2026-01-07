import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dgp")
export default class DgpController {
  @operation({
    summary: "Get Dgp",
  })
  @get()
  static getDgp = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dgp",
  })
  @post("{id}")
  static createDgp = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
