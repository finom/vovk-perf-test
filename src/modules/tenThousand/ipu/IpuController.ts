import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ipu")
export default class IpuController {
  @operation({
    summary: "Get Ipu",
  })
  @get()
  static getIpu = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ipu",
  })
  @post("{id}")
  static createIpu = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
