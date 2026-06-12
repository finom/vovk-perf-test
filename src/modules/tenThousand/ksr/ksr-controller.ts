import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ksr")
export default class KsrController {
  @operation({
    summary: "Get Ksr",
  })
  @get()
  static getKsr = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ksr",
  })
  @post("{id}")
  static createKsr = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
