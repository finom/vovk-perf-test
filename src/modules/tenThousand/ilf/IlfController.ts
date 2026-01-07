import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ilf")
export default class IlfController {
  @operation({
    summary: "Get Ilf",
  })
  @get()
  static getIlf = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ilf",
  })
  @post("{id}")
  static createIlf = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
