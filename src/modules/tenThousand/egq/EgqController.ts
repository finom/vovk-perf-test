import { procedure, prefix, get, post, operation } from "vovk";

@prefix("egq")
export default class EgqController {
  @operation({
    summary: "Get Egq",
  })
  @get()
  static getEgq = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Egq",
  })
  @post("{id}")
  static createEgq = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
