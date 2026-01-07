import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gty")
export default class GtyController {
  @operation({
    summary: "Get Gty",
  })
  @get()
  static getGty = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gty",
  })
  @post("{id}")
  static createGty = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
