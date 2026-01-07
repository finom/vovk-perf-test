import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ick")
export default class IckController {
  @operation({
    summary: "Get Ick",
  })
  @get()
  static getIck = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ick",
  })
  @post("{id}")
  static createIck = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
