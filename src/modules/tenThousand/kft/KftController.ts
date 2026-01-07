import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kft")
export default class KftController {
  @operation({
    summary: "Get Kft",
  })
  @get()
  static getKft = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kft",
  })
  @post("{id}")
  static createKft = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
