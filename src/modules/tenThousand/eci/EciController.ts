import { procedure, prefix, get, post, operation } from "vovk";

@prefix("eci")
export default class EciController {
  @operation({
    summary: "Get Eci",
  })
  @get()
  static getEci = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Eci",
  })
  @post("{id}")
  static createEci = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
