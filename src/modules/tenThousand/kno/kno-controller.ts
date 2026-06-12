import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("kno")
export default class KnoController {
  @operation({
    summary: "Get Kno",
  })
  @get()
  static getKno = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Kno",
  })
  @post("{id}")
  static createKno = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
