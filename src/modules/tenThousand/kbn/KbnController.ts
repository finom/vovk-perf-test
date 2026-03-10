import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("kbn")
export default class KbnController {
  @operation({
    summary: "Get Kbn",
  })
  @get()
  static getKbn = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Kbn",
  })
  @post("{id}")
  static createKbn = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
