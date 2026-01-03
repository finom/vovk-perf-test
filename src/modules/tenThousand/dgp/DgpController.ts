import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dgps")
export default class DgpController {
  @operation({
    summary: "Get Dgps",
  })
  @get()
  static getDgps = procedure({
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
