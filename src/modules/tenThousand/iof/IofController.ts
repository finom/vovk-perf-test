import { procedure, prefix, get, post, operation } from "vovk";

@prefix("iof")
export default class IofController {
  @operation({
    summary: "Get Iof",
  })
  @get()
  static getIof = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Iof",
  })
  @post("{id}")
  static createIof = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
