import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cins")
export default class CinController {
  @operation({
    summary: "Get Cins",
  })
  @get()
  static getCins = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cin",
  })
  @post("{id}")
  static createCin = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
