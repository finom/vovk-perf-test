import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("kdd")
export default class KddController {
  @operation({
    summary: "Get Kdd",
  })
  @get()
  static getKdd = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Kdd",
  })
  @post("{id}")
  static createKdd = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
