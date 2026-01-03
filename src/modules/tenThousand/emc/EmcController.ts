import { procedure, prefix, get, post, operation } from "vovk";

@prefix("emcs")
export default class EmcController {
  @operation({
    summary: "Get Emcs",
  })
  @get()
  static getEmcs = procedure({
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
