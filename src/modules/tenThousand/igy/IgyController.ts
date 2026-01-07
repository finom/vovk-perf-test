import { procedure, prefix, get, post, operation } from "vovk";

@prefix("igy")
export default class IgyController {
  @operation({
    summary: "Get Igy",
  })
  @get()
  static getIgy = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Igy",
  })
  @post("{id}")
  static createIgy = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
