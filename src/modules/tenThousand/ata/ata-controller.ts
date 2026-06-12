import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ata")
export default class AtaController {
  @operation({
    summary: "Get Ata",
  })
  @get()
  static getAta = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ata",
  })
  @post("{id}")
  static createAta = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
