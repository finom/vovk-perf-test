import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dk")
export default class DkController {
  @operation({
    summary: "Get Dk",
  })
  @get()
  static getDk = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dk",
  })
  @post("{id}")
  static createDk = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
