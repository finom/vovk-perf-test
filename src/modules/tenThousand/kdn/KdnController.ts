import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("kdn")
export default class KdnController {
  @operation({
    summary: "Get Kdn",
  })
  @get()
  static getKdn = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Kdn",
  })
  @post("{id}")
  static createKdn = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
