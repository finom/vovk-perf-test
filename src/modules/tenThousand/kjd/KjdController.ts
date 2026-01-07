import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kjd")
export default class KjdController {
  @operation({
    summary: "Get Kjd",
  })
  @get()
  static getKjd = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kjd",
  })
  @post("{id}")
  static createKjd = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
