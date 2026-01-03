import { procedure, prefix, get, post, operation } from "vovk";

@prefix("aeps")
export default class AepController {
  @operation({
    summary: "Get Aeps",
  })
  @get()
  static getAeps = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Aep",
  })
  @post("{id}")
  static createAep = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
