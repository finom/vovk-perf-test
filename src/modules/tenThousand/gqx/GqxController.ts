import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gqx")
export default class GqxController {
  @operation({
    summary: "Get Gqx",
  })
  @get()
  static getGqx = procedure({
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
