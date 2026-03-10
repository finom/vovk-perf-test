import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("guk")
export default class GukController {
  @operation({
    summary: "Get Guk",
  })
  @get()
  static getGuk = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Guk",
  })
  @post("{id}")
  static createGuk = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
