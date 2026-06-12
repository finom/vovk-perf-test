import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("kii")
export default class KiiController {
  @operation({
    summary: "Get Kii",
  })
  @get()
  static getKii = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Kii",
  })
  @post("{id}")
  static createKii = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
