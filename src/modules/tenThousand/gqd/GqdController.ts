import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gqd")
export default class GqdController {
  @operation({
    summary: "Get Gqd",
  })
  @get()
  static getGqd = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gqd",
  })
  @post("{id}")
  static createGqd = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
