import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cris")
export default class CriController {
  @operation({
    summary: "Get Cris",
  })
  @get()
  static getCris = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cri",
  })
  @post("{id}")
  static createCri = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
