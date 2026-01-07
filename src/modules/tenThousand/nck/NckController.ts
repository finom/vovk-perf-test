import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nck")
export default class NckController {
  @operation({
    summary: "Get Nck",
  })
  @get()
  static getNck = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Nck",
  })
  @post("{id}")
  static createNck = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
