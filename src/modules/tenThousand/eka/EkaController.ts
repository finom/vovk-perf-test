import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("eka")
export default class EkaController {
  @operation({
    summary: "Get Eka",
  })
  @get()
  static getEka = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Eka",
  })
  @post("{id}")
  static createEka = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
