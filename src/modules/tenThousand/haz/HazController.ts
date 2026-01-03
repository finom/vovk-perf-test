import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hazs")
export default class HazController {
  @operation({
    summary: "Get Hazs",
  })
  @get()
  static getHazs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Haz",
  })
  @post("{id}")
  static createHaz = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
