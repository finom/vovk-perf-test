import { procedure, prefix, get, post, operation } from "vovk";

@prefix("edzs")
export default class EdzController {
  @operation({
    summary: "Get Edzs",
  })
  @get()
  static getEdzs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Edz",
  })
  @post("{id}")
  static createEdz = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
