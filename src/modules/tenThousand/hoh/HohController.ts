import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hoh")
export default class HohController {
  @operation({
    summary: "Get Hoh",
  })
  @get()
  static getHoh = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hoh",
  })
  @post("{id}")
  static createHoh = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
