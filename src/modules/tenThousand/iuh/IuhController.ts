import { procedure, prefix, get, post, operation } from "vovk";

@prefix("iuhs")
export default class IuhController {
  @operation({
    summary: "Get Iuhs",
  })
  @get()
  static getIuhs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Iuh",
  })
  @post("{id}")
  static createIuh = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
