import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hcn")
export default class HcnController {
  @operation({
    summary: "Get Hcn",
  })
  @get()
  static getHcn = procedure({
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
