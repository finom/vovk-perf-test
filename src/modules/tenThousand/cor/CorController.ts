import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cors")
export default class CorController {
  @operation({
    summary: "Get Cors",
  })
  @get()
  static getCors = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cor",
  })
  @post("{id}")
  static createCor = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
