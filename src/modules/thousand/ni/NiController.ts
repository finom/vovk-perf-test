import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nis")
export default class NiController {
  @operation({
    summary: "Get Nis",
  })
  @get()
  static getNis = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ni",
  })
  @post("{id}")
  static createNi = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
