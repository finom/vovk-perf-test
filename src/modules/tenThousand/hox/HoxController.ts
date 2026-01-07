import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hox")
export default class HoxController {
  @operation({
    summary: "Get Hox",
  })
  @get()
  static getHox = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hox",
  })
  @post("{id}")
  static createHox = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
