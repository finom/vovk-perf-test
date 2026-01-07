import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fdp")
export default class FdpController {
  @operation({
    summary: "Get Fdp",
  })
  @get()
  static getFdp = procedure({
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
