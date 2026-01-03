import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hcns")
export default class HcnController {
  @operation({
    summary: "Get Hcns",
  })
  @get()
  static getHcns = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hcn",
  })
  @post("{id}")
  static createHcn = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
