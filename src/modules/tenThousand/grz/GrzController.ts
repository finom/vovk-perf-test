import { procedure, prefix, get, post, operation } from "vovk";

@prefix("grz")
export default class GrzController {
  @operation({
    summary: "Get Grz",
  })
  @get()
  static getGrz = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Grz",
  })
  @post("{id}")
  static createGrz = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
