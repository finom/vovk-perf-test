import { procedure, prefix, get, post, operation } from "vovk";

@prefix("exg")
export default class ExgController {
  @operation({
    summary: "Get Exg",
  })
  @get()
  static getExg = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Exg",
  })
  @post("{id}")
  static createExg = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
