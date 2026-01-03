import { procedure, prefix, get, post, operation } from "vovk";

@prefix("imas")
export default class ImaController {
  @operation({
    summary: "Get Imas",
  })
  @get()
  static getImas = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ima",
  })
  @post("{id}")
  static createIma = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
