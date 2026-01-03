import { procedure, prefix, get, post, operation } from "vovk";

@prefix("axvs")
export default class AxvController {
  @operation({
    summary: "Get Axvs",
  })
  @get()
  static getAxvs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Axv",
  })
  @post("{id}")
  static createAxv = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
