import { procedure, prefix, get, post, operation } from "vovk";

@prefix("idrs")
export default class IdrController {
  @operation({
    summary: "Get Idrs",
  })
  @get()
  static getIdrs = procedure({
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
