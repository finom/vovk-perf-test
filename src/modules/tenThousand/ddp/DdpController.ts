import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ddps")
export default class DdpController {
  @operation({
    summary: "Get Ddps",
  })
  @get()
  static getDdps = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ddp",
  })
  @post("{id}")
  static createDdp = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
