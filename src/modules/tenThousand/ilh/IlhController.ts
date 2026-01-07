import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ilh")
export default class IlhController {
  @operation({
    summary: "Get Ilh",
  })
  @get()
  static getIlh = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ilh",
  })
  @post("{id}")
  static createIlh = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
