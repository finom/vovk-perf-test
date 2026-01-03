import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ibes")
export default class IbeController {
  @operation({
    summary: "Get Ibes",
  })
  @get()
  static getIbes = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ibe",
  })
  @post("{id}")
  static createIbe = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
