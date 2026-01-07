import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ezi")
export default class EziController {
  @operation({
    summary: "Get Ezi",
  })
  @get()
  static getEzi = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ezi",
  })
  @post("{id}")
  static createEzi = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
