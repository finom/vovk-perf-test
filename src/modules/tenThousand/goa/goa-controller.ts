import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("goa")
export default class GoaController {
  @operation({
    summary: "Get Goa",
  })
  @get()
  static getGoa = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Goa",
  })
  @post("{id}")
  static createGoa = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
