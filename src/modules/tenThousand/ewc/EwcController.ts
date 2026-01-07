import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ewc")
export default class EwcController {
  @operation({
    summary: "Get Ewc",
  })
  @get()
  static getEwc = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ewc",
  })
  @post("{id}")
  static createEwc = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
