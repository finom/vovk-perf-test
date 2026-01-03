import { procedure, prefix, get, post, operation } from "vovk";

@prefix("izgs")
export default class IzgController {
  @operation({
    summary: "Get Izgs",
  })
  @get()
  static getIzgs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Izg",
  })
  @post("{id}")
  static createIzg = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
