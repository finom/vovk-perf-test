import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ayq")
export default class AyqController {
  @operation({
    summary: "Get Ayq",
  })
  @get()
  static getAyq = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ayq",
  })
  @post("{id}")
  static createAyq = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
