import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kjh")
export default class KjhController {
  @operation({
    summary: "Get Kjh",
  })
  @get()
  static getKjh = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kjh",
  })
  @post("{id}")
  static createKjh = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
