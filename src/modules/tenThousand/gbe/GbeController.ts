import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gbes")
export default class GbeController {
  @operation({
    summary: "Get Gbes",
  })
  @get()
  static getGbes = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gbe",
  })
  @post("{id}")
  static createGbe = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
