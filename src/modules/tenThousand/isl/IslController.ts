import { procedure, prefix, get, post, operation } from "vovk";

@prefix("isls")
export default class IslController {
  @operation({
    summary: "Get Isls",
  })
  @get()
  static getIsls = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Isl",
  })
  @post("{id}")
  static createIsl = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
