import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ft")
export default class FtController {
  @operation({
    summary: "Get Ft",
  })
  @get()
  static getFt = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ft",
  })
  @post("{id}")
  static createFt = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
