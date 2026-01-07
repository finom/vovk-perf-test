import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ih")
export default class IhController {
  @operation({
    summary: "Get Ih",
  })
  @get()
  static getIh = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ih",
  })
  @post("{id}")
  static createIh = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
