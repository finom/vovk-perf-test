import { procedure, prefix, get, post, operation } from "vovk";

@prefix("eids")
export default class EidController {
  @operation({
    summary: "Get Eids",
  })
  @get()
  static getEids = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Eid",
  })
  @post("{id}")
  static createEid = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
