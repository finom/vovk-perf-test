import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kqps")
export default class KqpController {
  @operation({
    summary: "Get Kqps",
  })
  @get()
  static getKqps = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kqp",
  })
  @post("{id}")
  static createKqp = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
