import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kkk")
export default class KkkController {
  @operation({
    summary: "Get Kkk",
  })
  @get()
  static getKkk = procedure({
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
