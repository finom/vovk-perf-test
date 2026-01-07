import { procedure, prefix, get, post, operation } from "vovk";

@prefix("aib")
export default class AibController {
  @operation({
    summary: "Get Aib",
  })
  @get()
  static getAib = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Aib",
  })
  @post("{id}")
  static createAib = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
