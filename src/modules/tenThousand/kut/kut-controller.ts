import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("kut")
export default class KutController {
  @operation({
    summary: "Get Kut",
  })
  @get()
  static getKut = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Kut",
  })
  @post("{id}")
  static createKut = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
