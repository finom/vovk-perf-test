import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ijw")
export default class IjwController {
  @operation({
    summary: "Get Ijw",
  })
  @get()
  static getIjw = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ijw",
  })
  @post("{id}")
  static createIjw = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
