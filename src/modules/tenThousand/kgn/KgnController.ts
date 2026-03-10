import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("kgn")
export default class KgnController {
  @operation({
    summary: "Get Kgn",
  })
  @get()
  static getKgn = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Kgn",
  })
  @post("{id}")
  static createKgn = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
