import { procedure, prefix, get, post, operation } from "vovk";

@prefix("axfs")
export default class AxfController {
  @operation({
    summary: "Get Axfs",
  })
  @get()
  static getAxfs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Axf",
  })
  @post("{id}")
  static createAxf = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
