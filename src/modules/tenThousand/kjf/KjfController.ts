import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kjf")
export default class KjfController {
  @operation({
    summary: "Get Kjf",
  })
  @get()
  static getKjf = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kjf",
  })
  @post("{id}")
  static createKjf = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
