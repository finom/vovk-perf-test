import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cuk")
export default class CukController {
  @operation({
    summary: "Get Cuk",
  })
  @get()
  static getCuk = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cuk",
  })
  @post("{id}")
  static createCuk = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
