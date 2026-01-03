import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nous")
export default class NouController {
  @operation({
    summary: "Get Nous",
  })
  @get()
  static getNous = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Nou",
  })
  @post("{id}")
  static createNou = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
