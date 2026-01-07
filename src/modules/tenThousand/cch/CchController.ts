import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cch")
export default class CchController {
  @operation({
    summary: "Get Cch",
  })
  @get()
  static getCch = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cch",
  })
  @post("{id}")
  static createCch = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
