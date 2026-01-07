import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ilq")
export default class IlqController {
  @operation({
    summary: "Get Ilq",
  })
  @get()
  static getIlq = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ilq",
  })
  @post("{id}")
  static createIlq = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
