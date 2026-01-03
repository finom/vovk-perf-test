import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hcies")
export default class HcyController {
  @operation({
    summary: "Get Hcies",
  })
  @get()
  static getHcies = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hcy",
  })
  @post("{id}")
  static createHcy = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
