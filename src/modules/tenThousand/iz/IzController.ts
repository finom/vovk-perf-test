import { procedure, prefix, get, post, operation } from "vovk";

@prefix("iz")
export default class IzController {
  @operation({
    summary: "Get Iz",
  })
  @get()
  static getIz = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Iz",
  })
  @post("{id}")
  static createIz = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
