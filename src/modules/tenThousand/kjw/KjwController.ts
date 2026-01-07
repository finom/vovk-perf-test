import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kjw")
export default class KjwController {
  @operation({
    summary: "Get Kjw",
  })
  @get()
  static getKjw = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kjw",
  })
  @post("{id}")
  static createKjw = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
