import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bih")
export default class BihController {
  @operation({
    summary: "Get Bih",
  })
  @get()
  static getBih = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bih",
  })
  @post("{id}")
  static createBih = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
