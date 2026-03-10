import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("kro")
export default class KroController {
  @operation({
    summary: "Get Kro",
  })
  @get()
  static getKro = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Kro",
  })
  @post("{id}")
  static createKro = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
