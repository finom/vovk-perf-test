import { procedure, prefix, get, post, operation } from "vovk";

@prefix("axe")
export default class AxeController {
  @operation({
    summary: "Get Axe",
  })
  @get()
  static getAxe = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Axe",
  })
  @post("{id}")
  static createAxe = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
