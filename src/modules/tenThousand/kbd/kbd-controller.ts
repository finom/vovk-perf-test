import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("kbd")
export default class KbdController {
  @operation({
    summary: "Get Kbd",
  })
  @get()
  static getKbd = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Kbd",
  })
  @post("{id}")
  static createKbd = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
