import { procedure, prefix, get, post, operation } from "vovk";

@prefix("frd")
export default class FrdController {
  @operation({
    summary: "Get Frd",
  })
  @get()
  static getFrd = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Frd",
  })
  @post("{id}")
  static createFrd = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
