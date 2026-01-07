import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gqk")
export default class GqkController {
  @operation({
    summary: "Get Gqk",
  })
  @get()
  static getGqk = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gqk",
  })
  @post("{id}")
  static createGqk = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
