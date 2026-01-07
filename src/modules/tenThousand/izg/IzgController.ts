import { procedure, prefix, get, post, operation } from "vovk";

@prefix("izg")
export default class IzgController {
  @operation({
    summary: "Get Izg",
  })
  @get()
  static getIzg = procedure({
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
