import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nht")
export default class NhtController {
  @operation({
    summary: "Get Nht",
  })
  @get()
  static getNht = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Nht",
  })
  @post("{id}")
  static createNht = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
