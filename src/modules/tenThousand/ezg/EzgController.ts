import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ezg")
export default class EzgController {
  @operation({
    summary: "Get Ezg",
  })
  @get()
  static getEzg = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ezg",
  })
  @post("{id}")
  static createEzg = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
