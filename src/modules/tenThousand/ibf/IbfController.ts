import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ibf")
export default class IbfController {
  @operation({
    summary: "Get Ibf",
  })
  @get()
  static getIbf = procedure({
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
