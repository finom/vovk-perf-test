import { procedure, prefix, get, post, operation } from "vovk";

@prefix("igz")
export default class IgzController {
  @operation({
    summary: "Get Igz",
  })
  @get()
  static getIgz = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Igz",
  })
  @post("{id}")
  static createIgz = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
