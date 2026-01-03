import { procedure, prefix, get, post, operation } from "vovk";

@prefix("iuds")
export default class IudController {
  @operation({
    summary: "Get Iuds",
  })
  @get()
  static getIuds = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Iud",
  })
  @post("{id}")
  static createIud = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
