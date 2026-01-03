import { procedure, prefix, get, post, operation } from "vovk";

@prefix("glds")
export default class GldController {
  @operation({
    summary: "Get Glds",
  })
  @get()
  static getGlds = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gld",
  })
  @post("{id}")
  static createGld = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
