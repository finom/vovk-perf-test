import { procedure, prefix, get, post, operation } from "vovk";

@prefix("iols")
export default class IolController {
  @operation({
    summary: "Get Iols",
  })
  @get()
  static getIols = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Iol",
  })
  @post("{id}")
  static createIol = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
