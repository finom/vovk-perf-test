import { procedure, prefix, get, post, operation } from "vovk";

@prefix("njos")
export default class NjoController {
  @operation({
    summary: "Get Njos",
  })
  @get()
  static getNjos = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Njo",
  })
  @post("{id}")
  static createNjo = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
