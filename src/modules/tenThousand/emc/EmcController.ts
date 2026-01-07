import { procedure, prefix, get, post, operation } from "vovk";

@prefix("emc")
export default class EmcController {
  @operation({
    summary: "Get Emc",
  })
  @get()
  static getEmc = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Emc",
  })
  @post("{id}")
  static createEmc = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
