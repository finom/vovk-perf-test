import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("kn")
export default class KnController {
  @operation({
    summary: "Get Kn",
  })
  @get()
  static getKn = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Kn",
  })
  @post("{id}")
  static createKn = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
