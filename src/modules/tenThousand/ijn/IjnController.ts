import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ijn")
export default class IjnController {
  @operation({
    summary: "Get Ijn",
  })
  @get()
  static getIjn = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ijn",
  })
  @post("{id}")
  static createIjn = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
