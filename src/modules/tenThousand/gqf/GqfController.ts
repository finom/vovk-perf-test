import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gqfs")
export default class GqfController {
  @operation({
    summary: "Get Gqfs",
  })
  @get()
  static getGqfs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gqf",
  })
  @post("{id}")
  static createGqf = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
