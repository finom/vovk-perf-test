import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ihs")
export default class IhController {
  @operation({
    summary: "Get Ihs",
  })
  @get()
  static getIhs = procedure({
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
