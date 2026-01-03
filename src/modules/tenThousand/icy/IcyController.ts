import { procedure, prefix, get, post, operation } from "vovk";

@prefix("icies")
export default class IcyController {
  @operation({
    summary: "Get Icies",
  })
  @get()
  static getIcies = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Icy",
  })
  @post("{id}")
  static createIcy = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
