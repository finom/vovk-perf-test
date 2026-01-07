import { procedure, prefix, get, post, operation } from "vovk";

@prefix("edf")
export default class EdfController {
  @operation({
    summary: "Get Edf",
  })
  @get()
  static getEdf = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Edf",
  })
  @post("{id}")
  static createEdf = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
