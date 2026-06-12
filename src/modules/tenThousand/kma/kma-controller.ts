import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("kma")
export default class KmaController {
  @operation({
    summary: "Get Kma",
  })
  @get()
  static getKma = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Kma",
  })
  @post("{id}")
  static createKma = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
