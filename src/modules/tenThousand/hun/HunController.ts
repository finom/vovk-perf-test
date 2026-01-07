import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hun")
export default class HunController {
  @operation({
    summary: "Get Hun",
  })
  @get()
  static getHun = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hun",
  })
  @post("{id}")
  static createHun = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
