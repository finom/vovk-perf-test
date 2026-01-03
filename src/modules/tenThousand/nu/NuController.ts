import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nus")
export default class NuController {
  @operation({
    summary: "Get Nus",
  })
  @get()
  static getNus = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Nu",
  })
  @post("{id}")
  static createNu = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
