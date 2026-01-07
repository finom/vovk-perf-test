import { procedure, prefix, get, post, operation } from "vovk";

@prefix("egz")
export default class EgzController {
  @operation({
    summary: "Get Egz",
  })
  @get()
  static getEgz = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Egz",
  })
  @post("{id}")
  static createEgz = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
