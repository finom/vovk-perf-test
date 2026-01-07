import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ko")
export default class KoController {
  @operation({
    summary: "Get Ko",
  })
  @get()
  static getKo = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ko",
  })
  @post("{id}")
  static createKo = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
