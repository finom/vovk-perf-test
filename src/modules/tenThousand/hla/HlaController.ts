import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hla")
export default class HlaController {
  @operation({
    summary: "Get Hla",
  })
  @get()
  static getHla = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hla",
  })
  @post("{id}")
  static createHla = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
