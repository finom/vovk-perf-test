import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hhx")
export default class HhxController {
  @operation({
    summary: "Get Hhx",
  })
  @get()
  static getHhx = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hhx",
  })
  @post("{id}")
  static createHhx = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
