import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("kqo")
export default class KqoController {
  @operation({
    summary: "Get Kqo",
  })
  @get()
  static getKqo = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Kqo",
  })
  @post("{id}")
  static createKqo = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
