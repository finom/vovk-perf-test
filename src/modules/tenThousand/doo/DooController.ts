import { procedure, prefix, get, post, operation } from "vovk";

@prefix("doo")
export default class DooController {
  @operation({
    summary: "Get Doo",
  })
  @get()
  static getDoo = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Doo",
  })
  @post("{id}")
  static createDoo = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
