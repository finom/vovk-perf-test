import { procedure, prefix, get, post, operation } from "vovk";

@prefix("emy")
export default class EmyController {
  @operation({
    summary: "Get Emy",
  })
  @get()
  static getEmy = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Emy",
  })
  @post("{id}")
  static createEmy = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
