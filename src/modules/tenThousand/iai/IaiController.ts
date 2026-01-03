import { procedure, prefix, get, post, operation } from "vovk";

@prefix("iais")
export default class IaiController {
  @operation({
    summary: "Get Iais",
  })
  @get()
  static getIais = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Iai",
  })
  @post("{id}")
  static createIai = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
