import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jve")
export default class JveController {
  @operation({
    summary: "Get Jve",
  })
  @get()
  static getJve = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jve",
  })
  @post("{id}")
  static createJve = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
