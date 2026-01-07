import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kzj")
export default class KzjController {
  @operation({
    summary: "Get Kzj",
  })
  @get()
  static getKzj = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kzj",
  })
  @post("{id}")
  static createKzj = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
