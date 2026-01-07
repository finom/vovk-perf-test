import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gjn")
export default class GjnController {
  @operation({
    summary: "Get Gjn",
  })
  @get()
  static getGjn = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gjn",
  })
  @post("{id}")
  static createGjn = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
