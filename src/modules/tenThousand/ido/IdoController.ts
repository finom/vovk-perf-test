import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ido")
export default class IdoController {
  @operation({
    summary: "Get Ido",
  })
  @get()
  static getIdo = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ido",
  })
  @post("{id}")
  static createIdo = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
