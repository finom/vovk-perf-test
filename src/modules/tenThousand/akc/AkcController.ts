import { procedure, prefix, get, post, operation } from "vovk";

@prefix("akcs")
export default class AkcController {
  @operation({
    summary: "Get Akcs",
  })
  @get()
  static getAkcs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Akc",
  })
  @post("{id}")
  static createAkc = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
