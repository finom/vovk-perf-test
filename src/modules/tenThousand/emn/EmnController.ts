import { procedure, prefix, get, post, operation } from "vovk";

@prefix("emn")
export default class EmnController {
  @operation({
    summary: "Get Emn",
  })
  @get()
  static getEmn = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Emn",
  })
  @post("{id}")
  static createEmn = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
