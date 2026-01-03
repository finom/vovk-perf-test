import { procedure, prefix, get, post, operation } from "vovk";

@prefix("divs")
export default class DivController {
  @operation({
    summary: "Get Divs",
  })
  @get()
  static getDivs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Div",
  })
  @post("{id}")
  static createDiv = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
