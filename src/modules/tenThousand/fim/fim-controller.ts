import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fim")
export default class FimController {
  @operation({
    summary: "Get Fim",
  })
  @get()
  static getFim = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Fim",
  })
  @post("{id}")
  static createFim = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
