import { procedure, prefix, get, post, operation } from "vovk";

@prefix("irgs")
export default class IrgController {
  @operation({
    summary: "Get Irgs",
  })
  @get()
  static getIrgs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Irg",
  })
  @post("{id}")
  static createIrg = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
