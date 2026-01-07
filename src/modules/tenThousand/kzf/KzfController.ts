import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kzf")
export default class KzfController {
  @operation({
    summary: "Get Kzf",
  })
  @get()
  static getKzf = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kzf",
  })
  @post("{id}")
  static createKzf = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
