import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dfos")
export default class DfoController {
  @operation({
    summary: "Get Dfos",
  })
  @get()
  static getDfos = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dfo",
  })
  @post("{id}")
  static createDfo = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
