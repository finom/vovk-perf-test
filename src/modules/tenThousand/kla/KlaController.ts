import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("kla")
export default class KlaController {
  @operation({
    summary: "Get Kla",
  })
  @get()
  static getKla = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Kla",
  })
  @post("{id}")
  static createKla = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
