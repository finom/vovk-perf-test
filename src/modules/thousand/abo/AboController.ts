import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("abo")
export default class AboController {
  @operation({
    summary: "Get Abo",
  })
  @get()
  static getAbo = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Abo",
  })
  @post("{id}")
  static createAbo = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
