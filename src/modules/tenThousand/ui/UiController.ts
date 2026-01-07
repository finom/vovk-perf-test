import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ui")
export default class UiController {
  @operation({
    summary: "Get Ui",
  })
  @get()
  static getUi = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ui",
  })
  @post("{id}")
  static createUi = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
