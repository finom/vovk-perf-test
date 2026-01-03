import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ewcs")
export default class EwcController {
  @operation({
    summary: "Get Ewcs",
  })
  @get()
  static getEwcs = procedure({
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
