import { procedure, prefix, get, post, operation } from "vovk";

@prefix("aghs")
export default class AghController {
  @operation({
    summary: "Get Aghs",
  })
  @get()
  static getAghs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Agh",
  })
  @post("{id}")
  static createAgh = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
