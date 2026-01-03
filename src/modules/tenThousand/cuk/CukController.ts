import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cuks")
export default class CukController {
  @operation({
    summary: "Get Cuks",
  })
  @get()
  static getCuks = procedure({
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
