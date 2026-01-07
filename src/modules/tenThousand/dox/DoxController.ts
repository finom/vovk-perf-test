import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dox")
export default class DoxController {
  @operation({
    summary: "Get Dox",
  })
  @get()
  static getDox = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dox",
  })
  @post("{id}")
  static createDox = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
