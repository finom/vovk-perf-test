import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lzi")
export default class LziController {
  @operation({
    summary: "Get Lzi",
  })
  @get()
  static getLzi = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lzi",
  })
  @post("{id}")
  static createLzi = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
