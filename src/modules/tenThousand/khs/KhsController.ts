import { procedure, prefix, get, post, operation } from "vovk";

@prefix("khs")
export default class KhsController {
  @operation({
    summary: "Get Khs",
  })
  @get()
  static getKhs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Khs",
  })
  @post("{id}")
  static createKhs = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
