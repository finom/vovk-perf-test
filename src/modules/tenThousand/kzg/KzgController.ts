import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kzg")
export default class KzgController {
  @operation({
    summary: "Get Kzg",
  })
  @get()
  static getKzg = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kzg",
  })
  @post("{id}")
  static createKzg = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
