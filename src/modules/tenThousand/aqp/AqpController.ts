import { procedure, prefix, get, post, operation } from "vovk";

@prefix("aqps")
export default class AqpController {
  @operation({
    summary: "Get Aqps",
  })
  @get()
  static getAqps = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Aqp",
  })
  @post("{id}")
  static createAqp = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
