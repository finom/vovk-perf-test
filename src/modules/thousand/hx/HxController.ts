import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hx")
export default class HxController {
  @operation({
    summary: "Get Hx",
  })
  @get()
  static getHx = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hx",
  })
  @post("{id}")
  static createHx = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
