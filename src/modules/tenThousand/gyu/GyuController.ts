import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gyu")
export default class GyuController {
  @operation({
    summary: "Get Gyu",
  })
  @get()
  static getGyu = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gyu",
  })
  @post("{id}")
  static createGyu = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
