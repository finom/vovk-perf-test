import { procedure, prefix, get, post, operation } from "vovk";

@prefix("byts")
export default class BytController {
  @operation({
    summary: "Get Byts",
  })
  @get()
  static getByts = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Byt",
  })
  @post("{id}")
  static createByt = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
