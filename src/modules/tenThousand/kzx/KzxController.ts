import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kzx")
export default class KzxController {
  @operation({
    summary: "Get Kzx",
  })
  @get()
  static getKzx = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kzx",
  })
  @post("{id}")
  static createKzx = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
