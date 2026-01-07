import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kog")
export default class KogController {
  @operation({
    summary: "Get Kog",
  })
  @get()
  static getKog = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kog",
  })
  @post("{id}")
  static createKog = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
