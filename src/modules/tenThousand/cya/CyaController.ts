import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cyas")
export default class CyaController {
  @operation({
    summary: "Get Cyas",
  })
  @get()
  static getCyas = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cya",
  })
  @post("{id}")
  static createCya = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
