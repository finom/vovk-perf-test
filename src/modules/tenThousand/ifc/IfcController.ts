import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ifc")
export default class IfcController {
  @operation({
    summary: "Get Ifc",
  })
  @get()
  static getIfc = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ifc",
  })
  @post("{id}")
  static createIfc = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
