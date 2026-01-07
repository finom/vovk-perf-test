import { procedure, prefix, get, post, operation } from "vovk";

@prefix("iye")
export default class IyeController {
  @operation({
    summary: "Get Iye",
  })
  @get()
  static getIye = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Iye",
  })
  @post("{id}")
  static createIye = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
