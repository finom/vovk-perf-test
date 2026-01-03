import { procedure, prefix, get, post, operation } from "vovk";

@prefix("eties")
export default class EtyController {
  @operation({
    summary: "Get Eties",
  })
  @get()
  static getEties = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ety",
  })
  @post("{id}")
  static createEty = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
