import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dnk")
export default class DnkController {
  @operation({
    summary: "Get Dnk",
  })
  @get()
  static getDnk = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dnk",
  })
  @post("{id}")
  static createDnk = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
