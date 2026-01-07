import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dcp")
export default class DcpController {
  @operation({
    summary: "Get Dcp",
  })
  @get()
  static getDcp = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dcp",
  })
  @post("{id}")
  static createDcp = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
