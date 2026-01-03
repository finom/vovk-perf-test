import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kkks")
export default class KkkController {
  @operation({
    summary: "Get Kkks",
  })
  @get()
  static getKkks = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kkk",
  })
  @post("{id}")
  static createKkk = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
