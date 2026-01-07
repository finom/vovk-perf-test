import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ipy")
export default class IpyController {
  @operation({
    summary: "Get Ipy",
  })
  @get()
  static getIpy = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ipy",
  })
  @post("{id}")
  static createIpy = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
