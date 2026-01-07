import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jev")
export default class JevController {
  @operation({
    summary: "Get Jev",
  })
  @get()
  static getJev = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jev",
  })
  @post("{id}")
  static createJev = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
