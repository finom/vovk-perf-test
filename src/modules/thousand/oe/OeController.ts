import { procedure, prefix, get, post, operation } from "vovk";

@prefix("oe")
export default class OeController {
  @operation({
    summary: "Get Oe",
  })
  @get()
  static getOe = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Oe",
  })
  @post("{id}")
  static createOe = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
