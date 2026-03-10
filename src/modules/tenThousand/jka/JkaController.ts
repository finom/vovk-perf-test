import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jka")
export default class JkaController {
  @operation({
    summary: "Get Jka",
  })
  @get()
  static getJka = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Jka",
  })
  @post("{id}")
  static createJka = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
