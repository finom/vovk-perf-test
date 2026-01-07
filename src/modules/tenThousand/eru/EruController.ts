import { procedure, prefix, get, post, operation } from "vovk";

@prefix("eru")
export default class EruController {
  @operation({
    summary: "Get Eru",
  })
  @get()
  static getEru = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Eru",
  })
  @post("{id}")
  static createEru = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
