import { procedure, prefix, get, post, operation } from "vovk";

@prefix("iai")
export default class IaiController {
  @operation({
    summary: "Get Iai",
  })
  @get()
  static getIai = procedure({
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
