import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ivy")
export default class IvyController {
  @operation({
    summary: "Get Ivy",
  })
  @get()
  static getIvy = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ivy",
  })
  @post("{id}")
  static createIvy = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
