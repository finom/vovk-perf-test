import { procedure, prefix, get, post, operation } from "vovk";

@prefix("klk")
export default class KlkController {
  @operation({
    summary: "Get Klk",
  })
  @get()
  static getKlk = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Klk",
  })
  @post("{id}")
  static createKlk = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
