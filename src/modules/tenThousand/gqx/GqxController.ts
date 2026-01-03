import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gqxes")
export default class GqxController {
  @operation({
    summary: "Get Gqxes",
  })
  @get()
  static getGqxes = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gqx",
  })
  @post("{id}")
  static createGqx = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
