import { procedure, prefix, get, post, operation } from "vovk";

@prefix("eoe")
export default class EoeController {
  @operation({
    summary: "Get Eoe",
  })
  @get()
  static getEoe = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Eoe",
  })
  @post("{id}")
  static createEoe = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
