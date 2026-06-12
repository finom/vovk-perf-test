import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("kmu")
export default class KmuController {
  @operation({
    summary: "Get Kmu",
  })
  @get()
  static getKmu = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Kmu",
  })
  @post("{id}")
  static createKmu = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
