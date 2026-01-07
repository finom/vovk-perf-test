import { procedure, prefix, get, post, operation } from "vovk";

@prefix("vn")
export default class VnController {
  @operation({
    summary: "Get Vn",
  })
  @get()
  static getVn = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Vn",
  })
  @post("{id}")
  static createVn = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
