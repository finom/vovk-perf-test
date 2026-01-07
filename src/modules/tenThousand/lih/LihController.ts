import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lih")
export default class LihController {
  @operation({
    summary: "Get Lih",
  })
  @get()
  static getLih = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lih",
  })
  @post("{id}")
  static createLih = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
