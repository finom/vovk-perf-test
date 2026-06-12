import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("iza")
export default class IzaController {
  @operation({
    summary: "Get Iza",
  })
  @get()
  static getIza = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Iza",
  })
  @post("{id}")
  static createIza = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
