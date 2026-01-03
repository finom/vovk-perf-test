import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hrgs")
export default class HrgController {
  @operation({
    summary: "Get Hrgs",
  })
  @get()
  static getHrgs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hrg",
  })
  @post("{id}")
  static createHrg = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
