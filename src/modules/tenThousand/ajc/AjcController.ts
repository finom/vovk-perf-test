import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ajcs")
export default class AjcController {
  @operation({
    summary: "Get Ajcs",
  })
  @get()
  static getAjcs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ajc",
  })
  @post("{id}")
  static createAjc = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
