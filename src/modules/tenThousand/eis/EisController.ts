import { procedure, prefix, get, post, operation } from "vovk";

@prefix("eis")
export default class EisController {
  @operation({
    summary: "Get Eis",
  })
  @get()
  static getEis = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Eis",
  })
  @post("{id}")
  static createEis = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
