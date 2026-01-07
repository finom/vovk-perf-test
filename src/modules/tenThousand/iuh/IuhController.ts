import { procedure, prefix, get, post, operation } from "vovk";

@prefix("iuh")
export default class IuhController {
  @operation({
    summary: "Get Iuh",
  })
  @get()
  static getIuh = procedure({
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
