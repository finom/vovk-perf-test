import { procedure, prefix, get, post, operation } from "vovk";

@prefix("clh")
export default class ClhController {
  @operation({
    summary: "Get Clh",
  })
  @get()
  static getClh = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Clh",
  })
  @post("{id}")
  static createClh = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
