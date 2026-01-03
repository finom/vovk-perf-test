import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hvas")
export default class HvaController {
  @operation({
    summary: "Get Hvas",
  })
  @get()
  static getHvas = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hva",
  })
  @post("{id}")
  static createHva = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
