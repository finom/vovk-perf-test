import { procedure, prefix, get, post, operation } from "vovk";

@prefix("anz")
export default class AnzController {
  @operation({
    summary: "Get Anz",
  })
  @get()
  static getAnz = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Anz",
  })
  @post("{id}")
  static createAnz = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
