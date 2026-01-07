import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cri")
export default class CriController {
  @operation({
    summary: "Get Cri",
  })
  @get()
  static getCri = procedure({
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
