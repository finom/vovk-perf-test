import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gjz")
export default class GjzController {
  @operation({
    summary: "Get Gjz",
  })
  @get()
  static getGjz = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gjz",
  })
  @post("{id}")
  static createGjz = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
