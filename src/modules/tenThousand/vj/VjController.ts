import { procedure, prefix, get, post, operation } from "vovk";

@prefix("vj")
export default class VjController {
  @operation({
    summary: "Get Vj",
  })
  @get()
  static getVj = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Vj",
  })
  @post("{id}")
  static createVj = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
