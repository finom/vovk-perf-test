import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cgies")
export default class CgyController {
  @operation({
    summary: "Get Cgies",
  })
  @get()
  static getCgies = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cgy",
  })
  @post("{id}")
  static createCgy = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
