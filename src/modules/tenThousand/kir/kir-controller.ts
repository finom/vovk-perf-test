import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("kir")
export default class KirController {
  @operation({
    summary: "Get Kir",
  })
  @get()
  static getKir = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Kir",
  })
  @post("{id}")
  static createKir = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
