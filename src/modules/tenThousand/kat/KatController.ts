import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("kat")
export default class KatController {
  @operation({
    summary: "Get Kat",
  })
  @get()
  static getKat = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Kat",
  })
  @post("{id}")
  static createKat = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
