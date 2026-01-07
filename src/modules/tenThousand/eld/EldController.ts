import { procedure, prefix, get, post, operation } from "vovk";

@prefix("eld")
export default class EldController {
  @operation({
    summary: "Get Eld",
  })
  @get()
  static getEld = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Eld",
  })
  @post("{id}")
  static createEld = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
