import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ftos")
export default class FtoController {
  @operation({
    summary: "Get Ftos",
  })
  @get()
  static getFtos = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fto",
  })
  @post("{id}")
  static createFto = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
