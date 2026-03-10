import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("kct")
export default class KctController {
  @operation({
    summary: "Get Kct",
  })
  @get()
  static getKct = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Kct",
  })
  @post("{id}")
  static createKct = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
