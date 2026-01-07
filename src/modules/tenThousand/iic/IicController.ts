import { procedure, prefix, get, post, operation } from "vovk";

@prefix("iic")
export default class IicController {
  @operation({
    summary: "Get Iic",
  })
  @get()
  static getIic = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Iic",
  })
  @post("{id}")
  static createIic = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
