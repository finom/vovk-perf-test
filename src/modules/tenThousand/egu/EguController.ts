import { procedure, prefix, get, post, operation } from "vovk";

@prefix("egus")
export default class EguController {
  @operation({
    summary: "Get Egus",
  })
  @get()
  static getEgus = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Egu",
  })
  @post("{id}")
  static createEgu = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
