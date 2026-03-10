import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("iki")
export default class IkiController {
  @operation({
    summary: "Get Iki",
  })
  @get()
  static getIki = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Iki",
  })
  @post("{id}")
  static createIki = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
