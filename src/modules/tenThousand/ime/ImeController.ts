import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ime")
export default class ImeController {
  @operation({
    summary: "Get Ime",
  })
  @get()
  static getIme = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ime",
  })
  @post("{id}")
  static createIme = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
