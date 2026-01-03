import { procedure, prefix, get, post, operation } from "vovk";

@prefix("byqs")
export default class ByqController {
  @operation({
    summary: "Get Byqs",
  })
  @get()
  static getByqs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Byq",
  })
  @post("{id}")
  static createByq = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
