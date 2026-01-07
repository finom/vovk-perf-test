import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cya")
export default class CyaController {
  @operation({
    summary: "Get Cya",
  })
  @get()
  static getCya = procedure({
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
