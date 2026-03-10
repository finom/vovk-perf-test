import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("kio")
export default class KioController {
  @operation({
    summary: "Get Kio",
  })
  @get()
  static getKio = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Kio",
  })
  @post("{id}")
  static createKio = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
