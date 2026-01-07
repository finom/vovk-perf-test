import { procedure, prefix, get, post, operation } from "vovk";

@prefix("iaa")
export default class IaaController {
  @operation({
    summary: "Get Iaa",
  })
  @get()
  static getIaa = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Iaa",
  })
  @post("{id}")
  static createIaa = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
