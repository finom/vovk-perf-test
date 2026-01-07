import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cit")
export default class CitController {
  @operation({
    summary: "Get Cit",
  })
  @get()
  static getCit = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cit",
  })
  @post("{id}")
  static createCit = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
