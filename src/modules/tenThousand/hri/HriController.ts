import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hris")
export default class HriController {
  @operation({
    summary: "Get Hris",
  })
  @get()
  static getHris = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hri",
  })
  @post("{id}")
  static createHri = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
