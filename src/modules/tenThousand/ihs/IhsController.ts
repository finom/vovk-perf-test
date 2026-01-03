import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ihs")
export default class IhsController {
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
    summary: "Create Ihs",
  })
  @post("{id}")
  static createIhs = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
