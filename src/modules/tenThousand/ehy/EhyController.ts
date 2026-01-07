import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ehy")
export default class EhyController {
  @operation({
    summary: "Get Ehy",
  })
  @get()
  static getEhy = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ehy",
  })
  @post("{id}")
  static createEhy = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
