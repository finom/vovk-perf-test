import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fdps")
export default class FdpController {
  @operation({
    summary: "Get Fdps",
  })
  @get()
  static getFdps = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fdp",
  })
  @post("{id}")
  static createFdp = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
