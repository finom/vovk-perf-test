import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bqo")
export default class BqoController {
  @operation({
    summary: "Get Bqo",
  })
  @get()
  static getBqo = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Bqo",
  })
  @post("{id}")
  static createBqo = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
