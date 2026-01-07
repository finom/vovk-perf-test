import { procedure, prefix, get, post, operation } from "vovk";

@prefix("se")
export default class SeController {
  @operation({
    summary: "Get Se",
  })
  @get()
  static getSe = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Se",
  })
  @post("{id}")
  static createSe = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
