import { procedure, prefix, get, post, operation } from "vovk";

@prefix("eh")
export default class EhController {
  @operation({
    summary: "Get Eh",
  })
  @get()
  static getEh = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Eh",
  })
  @post("{id}")
  static createEh = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
