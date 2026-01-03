import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ejxes")
export default class EjxController {
  @operation({
    summary: "Get Ejxes",
  })
  @get()
  static getEjxes = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ejx",
  })
  @post("{id}")
  static createEjx = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
