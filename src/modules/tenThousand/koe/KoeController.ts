import { procedure, prefix, get, post, operation } from "vovk";

@prefix("koes")
export default class KoeController {
  @operation({
    summary: "Get Koes",
  })
  @get()
  static getKoes = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Koe",
  })
  @post("{id}")
  static createKoe = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
