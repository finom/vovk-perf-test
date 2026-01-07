import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kjx")
export default class KjxController {
  @operation({
    summary: "Get Kjx",
  })
  @get()
  static getKjx = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kjx",
  })
  @post("{id}")
  static createKjx = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
