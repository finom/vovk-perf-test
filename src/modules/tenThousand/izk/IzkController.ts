import { procedure, prefix, get, post, operation } from "vovk";

@prefix("izk")
export default class IzkController {
  @operation({
    summary: "Get Izk",
  })
  @get()
  static getIzk = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Izk",
  })
  @post("{id}")
  static createIzk = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
