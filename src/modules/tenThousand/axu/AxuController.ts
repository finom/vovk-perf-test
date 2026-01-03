import { procedure, prefix, get, post, operation } from "vovk";

@prefix("axus")
export default class AxuController {
  @operation({
    summary: "Get Axus",
  })
  @get()
  static getAxus = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Axu",
  })
  @post("{id}")
  static createAxu = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
