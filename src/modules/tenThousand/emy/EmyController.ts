import { procedure, prefix, get, post, operation } from "vovk";

@prefix("emies")
export default class EmyController {
  @operation({
    summary: "Get Emies",
  })
  @get()
  static getEmies = procedure({
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
