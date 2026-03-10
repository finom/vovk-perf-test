import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ime")
export default class ImeController {
  @operation({
    summary: "Get Ime",
  })
  @get()
  static getIme = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ime",
  })
  @post("{id}")
  static createIme = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
