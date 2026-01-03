import { procedure, prefix, get, post, operation } from "vovk";

@prefix("eits")
export default class EitController {
  @operation({
    summary: "Get Eits",
  })
  @get()
  static getEits = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Eit",
  })
  @post("{id}")
  static createEit = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
