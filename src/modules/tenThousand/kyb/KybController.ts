import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kyb")
export default class KybController {
  @operation({
    summary: "Get Kyb",
  })
  @get()
  static getKyb = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kyb",
  })
  @post("{id}")
  static createKyb = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
