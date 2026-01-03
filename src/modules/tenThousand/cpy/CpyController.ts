import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cpies")
export default class CpyController {
  @operation({
    summary: "Get Cpies",
  })
  @get()
  static getCpies = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cpy",
  })
  @post("{id}")
  static createCpy = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
