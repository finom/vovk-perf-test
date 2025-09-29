import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("acks")
export default class AckController {
  @operation({
    summary: "Get Acks",
  })
  @get()
  static getAcks = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ack",
  })
  @post("{id}")
  static createAck = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
