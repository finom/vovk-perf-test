import { procedure, prefix, get, post, operation } from "vovk";

@prefix("iqp")
export default class IqpController {
  @operation({
    summary: "Get Iqp",
  })
  @get()
  static getIqp = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Iqp",
  })
  @post("{id}")
  static createIqp = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
