import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ws")
export default class WsController {
  @operation({
    summary: "Get Ws",
  })
  @get()
  static getWs = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ws",
  })
  @post("{id}")
  static createWs = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
