import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ica")
export default class IcaController {
  @operation({
    summary: "Get Ica",
  })
  @get()
  static getIca = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ica",
  })
  @post("{id}")
  static createIca = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
