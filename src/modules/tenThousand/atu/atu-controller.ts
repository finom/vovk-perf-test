import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("atu")
export default class AtuController {
  @operation({
    summary: "Get Atu",
  })
  @get()
  static getAtu = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Atu",
  })
  @post("{id}")
  static createAtu = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
