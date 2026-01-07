import { procedure, prefix, get, post, operation } from "vovk";

@prefix("iiw")
export default class IiwController {
  @operation({
    summary: "Get Iiw",
  })
  @get()
  static getIiw = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Iiw",
  })
  @post("{id}")
  static createIiw = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
