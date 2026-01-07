import { procedure, prefix, get, post, operation } from "vovk";

@prefix("coz")
export default class CozController {
  @operation({
    summary: "Get Coz",
  })
  @get()
  static getCoz = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Coz",
  })
  @post("{id}")
  static createCoz = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
