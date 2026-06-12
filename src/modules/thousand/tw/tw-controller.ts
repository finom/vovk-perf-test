import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("tw")
export default class TwController {
  @operation({
    summary: "Get Tw",
  })
  @get()
  static getTw = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Tw",
  })
  @post("{id}")
  static createTw = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
