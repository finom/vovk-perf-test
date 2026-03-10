import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("kt")
export default class KtController {
  @operation({
    summary: "Get Kt",
  })
  @get()
  static getKt = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Kt",
  })
  @post("{id}")
  static createKt = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
