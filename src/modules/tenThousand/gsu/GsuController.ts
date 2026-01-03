import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gsus")
export default class GsuController {
  @operation({
    summary: "Get Gsus",
  })
  @get()
  static getGsus = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gsu",
  })
  @post("{id}")
  static createGsu = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
