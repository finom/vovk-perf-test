import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nhos")
export default class NhoController {
  @operation({
    summary: "Get Nhos",
  })
  @get()
  static getNhos = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Nho",
  })
  @post("{id}")
  static createNho = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
