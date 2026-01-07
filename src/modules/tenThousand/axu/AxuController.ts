import { procedure, prefix, get, post, operation } from "vovk";

@prefix("axu")
export default class AxuController {
  @operation({
    summary: "Get Axu",
  })
  @get()
  static getAxu = procedure({
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
