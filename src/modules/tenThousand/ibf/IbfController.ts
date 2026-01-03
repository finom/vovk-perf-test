import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ibfs")
export default class IbfController {
  @operation({
    summary: "Get Ibfs",
  })
  @get()
  static getIbfs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ibf",
  })
  @post("{id}")
  static createIbf = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
