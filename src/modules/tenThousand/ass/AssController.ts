import { procedure, prefix, get, post, operation } from "vovk";

@prefix("asses")
export default class AssController {
  @operation({
    summary: "Get Asses",
  })
  @get()
  static getAsses = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ass",
  })
  @post("{id}")
  static createAss = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
