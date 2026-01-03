import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kofs")
export default class KofController {
  @operation({
    summary: "Get Kofs",
  })
  @get()
  static getKofs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kof",
  })
  @post("{id}")
  static createKof = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
