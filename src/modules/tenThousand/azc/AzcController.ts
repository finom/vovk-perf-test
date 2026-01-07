import { procedure, prefix, get, post, operation } from "vovk";

@prefix("azc")
export default class AzcController {
  @operation({
    summary: "Get Azc",
  })
  @get()
  static getAzc = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Azc",
  })
  @post("{id}")
  static createAzc = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
