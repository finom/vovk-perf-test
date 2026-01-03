import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hovs")
export default class HovController {
  @operation({
    summary: "Get Hovs",
  })
  @get()
  static getHovs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hov",
  })
  @post("{id}")
  static createHov = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
