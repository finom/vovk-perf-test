import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lqps")
export default class LqpController {
  @operation({
    summary: "Get Lqps",
  })
  @get()
  static getLqps = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lqp",
  })
  @post("{id}")
  static createLqp = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
