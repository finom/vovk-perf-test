import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gho")
export default class GhoController {
  @operation({
    summary: "Get Gho",
  })
  @get()
  static getGho = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gho",
  })
  @post("{id}")
  static createGho = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
