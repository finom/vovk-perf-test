import { procedure, prefix, get, post, operation } from "vovk";

@prefix("aaw")
export default class AawController {
  @operation({
    summary: "Get Aaw",
  })
  @get()
  static getAaw = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Aaw",
  })
  @post("{id}")
  static createAaw = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
