import { procedure, prefix, get, post, operation } from "vovk";

@prefix("axgs")
export default class AxgController {
  @operation({
    summary: "Get Axgs",
  })
  @get()
  static getAxgs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Axg",
  })
  @post("{id}")
  static createAxg = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
