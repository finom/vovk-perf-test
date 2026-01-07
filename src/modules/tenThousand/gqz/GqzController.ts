import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gqz")
export default class GqzController {
  @operation({
    summary: "Get Gqz",
  })
  @get()
  static getGqz = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gqz",
  })
  @post("{id}")
  static createGqz = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
