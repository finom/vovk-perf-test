import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("kul")
export default class KulController {
  @operation({
    summary: "Get Kul",
  })
  @get()
  static getKul = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Kul",
  })
  @post("{id}")
  static createKul = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
