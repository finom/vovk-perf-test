import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fcps")
export default class FcpController {
  @operation({
    summary: "Get Fcps",
  })
  @get()
  static getFcps = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fcp",
  })
  @post("{id}")
  static createFcp = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
