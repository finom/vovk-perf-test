import { procedure, prefix, get, post, operation } from "vovk";

@prefix("irg")
export default class IrgController {
  @operation({
    summary: "Get Irg",
  })
  @get()
  static getIrg = procedure({
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
