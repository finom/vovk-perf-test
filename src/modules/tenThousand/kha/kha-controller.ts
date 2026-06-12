import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("kha")
export default class KhaController {
  @operation({
    summary: "Get Kha",
  })
  @get()
  static getKha = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Kha",
  })
  @post("{id}")
  static createKha = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
