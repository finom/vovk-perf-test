import { procedure, prefix, get, post, operation } from "vovk";

@prefix("exbs")
export default class ExbController {
  @operation({
    summary: "Get Exbs",
  })
  @get()
  static getExbs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Exb",
  })
  @post("{id}")
  static createExb = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
