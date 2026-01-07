import { procedure, prefix, get, post, operation } from "vovk";

@prefix("arf")
export default class ArfController {
  @operation({
    summary: "Get Arf",
  })
  @get()
  static getArf = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Arf",
  })
  @post("{id}")
  static createArf = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
