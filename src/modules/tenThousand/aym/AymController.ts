import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ayms")
export default class AymController {
  @operation({
    summary: "Get Ayms",
  })
  @get()
  static getAyms = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Aym",
  })
  @post("{id}")
  static createAym = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
