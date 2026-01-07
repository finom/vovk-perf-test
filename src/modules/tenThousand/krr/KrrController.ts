import { procedure, prefix, get, post, operation } from "vovk";

@prefix("krr")
export default class KrrController {
  @operation({
    summary: "Get Krr",
  })
  @get()
  static getKrr = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Krr",
  })
  @post("{id}")
  static createKrr = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
