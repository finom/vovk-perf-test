import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cia")
export default class CiaController {
  @operation({
    summary: "Get Cia",
  })
  @get()
  static getCia = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cia",
  })
  @post("{id}")
  static createCia = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
