import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ety")
export default class EtyController {
  @operation({
    summary: "Get Ety",
  })
  @get()
  static getEty = procedure({
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
