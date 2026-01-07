import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ayf")
export default class AyfController {
  @operation({
    summary: "Get Ayf",
  })
  @get()
  static getAyf = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ayf",
  })
  @post("{id}")
  static createAyf = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
