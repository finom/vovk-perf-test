import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cij")
export default class CijController {
  @operation({
    summary: "Get Cij",
  })
  @get()
  static getCij = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cij",
  })
  @post("{id}")
  static createCij = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
