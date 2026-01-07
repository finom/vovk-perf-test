import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ejx")
export default class EjxController {
  @operation({
    summary: "Get Ejx",
  })
  @get()
  static getEjx = procedure({
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
