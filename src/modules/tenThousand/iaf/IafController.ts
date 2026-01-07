import { procedure, prefix, get, post, operation } from "vovk";

@prefix("iaf")
export default class IafController {
  @operation({
    summary: "Get Iaf",
  })
  @get()
  static getIaf = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Iaf",
  })
  @post("{id}")
  static createIaf = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
