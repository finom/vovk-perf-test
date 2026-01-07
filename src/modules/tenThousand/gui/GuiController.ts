import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gui")
export default class GuiController {
  @operation({
    summary: "Get Gui",
  })
  @get()
  static getGui = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gui",
  })
  @post("{id}")
  static createGui = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
