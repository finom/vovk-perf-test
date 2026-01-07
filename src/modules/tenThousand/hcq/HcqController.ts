import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hcq")
export default class HcqController {
  @operation({
    summary: "Get Hcq",
  })
  @get()
  static getHcq = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hcq",
  })
  @post("{id}")
  static createHcq = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
