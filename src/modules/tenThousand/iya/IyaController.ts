import { procedure, prefix, get, post, operation } from "vovk";

@prefix("iyas")
export default class IyaController {
  @operation({
    summary: "Get Iyas",
  })
  @get()
  static getIyas = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Iya",
  })
  @post("{id}")
  static createIya = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
