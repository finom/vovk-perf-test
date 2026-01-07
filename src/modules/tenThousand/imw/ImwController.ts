import { procedure, prefix, get, post, operation } from "vovk";

@prefix("imw")
export default class ImwController {
  @operation({
    summary: "Get Imw",
  })
  @get()
  static getImw = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Imw",
  })
  @post("{id}")
  static createImw = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
