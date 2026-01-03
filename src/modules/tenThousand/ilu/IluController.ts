import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ilus")
export default class IluController {
  @operation({
    summary: "Get Ilus",
  })
  @get()
  static getIlus = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ilu",
  })
  @post("{id}")
  static createIlu = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
