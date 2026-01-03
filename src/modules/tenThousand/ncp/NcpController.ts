import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ncps")
export default class NcpController {
  @operation({
    summary: "Get Ncps",
  })
  @get()
  static getNcps = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ncp",
  })
  @post("{id}")
  static createNcp = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
