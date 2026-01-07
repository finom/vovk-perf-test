import { procedure, prefix, get, post, operation } from "vovk";

@prefix("sv")
export default class SvController {
  @operation({
    summary: "Get Sv",
  })
  @get()
  static getSv = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Sv",
  })
  @post("{id}")
  static createSv = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
