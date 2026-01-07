import { procedure, prefix, get, post, operation } from "vovk";

@prefix("idr")
export default class IdrController {
  @operation({
    summary: "Get Idr",
  })
  @get()
  static getIdr = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Idr",
  })
  @post("{id}")
  static createIdr = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
