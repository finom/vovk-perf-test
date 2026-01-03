import { procedure, prefix, get, post, operation } from "vovk";

@prefix("eets")
export default class EetController {
  @operation({
    summary: "Get Eets",
  })
  @get()
  static getEets = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Eet",
  })
  @post("{id}")
  static createEet = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
