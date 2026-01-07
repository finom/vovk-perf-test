import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ahu")
export default class AhuController {
  @operation({
    summary: "Get Ahu",
  })
  @get()
  static getAhu = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ahu",
  })
  @post("{id}")
  static createAhu = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
