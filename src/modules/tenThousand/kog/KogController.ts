import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kogs")
export default class KogController {
  @operation({
    summary: "Get Kogs",
  })
  @get()
  static getKogs = procedure({
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
