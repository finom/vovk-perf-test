import { procedure, prefix, get, post, operation } from "vovk";

@prefix("euqs")
export default class EuqController {
  @operation({
    summary: "Get Euqs",
  })
  @get()
  static getEuqs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Euq",
  })
  @post("{id}")
  static createEuq = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
