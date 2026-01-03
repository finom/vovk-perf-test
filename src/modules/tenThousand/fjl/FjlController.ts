import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fjls")
export default class FjlController {
  @operation({
    summary: "Get Fjls",
  })
  @get()
  static getFjls = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fjl",
  })
  @post("{id}")
  static createFjl = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
