import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ieks")
export default class IekController {
  @operation({
    summary: "Get Ieks",
  })
  @get()
  static getIeks = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Iek",
  })
  @post("{id}")
  static createIek = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
