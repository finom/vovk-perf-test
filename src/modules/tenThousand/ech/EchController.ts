import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ech")
export default class EchController {
  @operation({
    summary: "Get Ech",
  })
  @get()
  static getEch = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ech",
  })
  @post("{id}")
  static createEch = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
