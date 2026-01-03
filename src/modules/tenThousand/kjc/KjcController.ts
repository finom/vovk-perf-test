import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kjcs")
export default class KjcController {
  @operation({
    summary: "Get Kjcs",
  })
  @get()
  static getKjcs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kjc",
  })
  @post("{id}")
  static createKjc = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
