import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("kns")
export default class KnsController {
  @operation({
    summary: "Get Kns",
  })
  @get()
  static getKns = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Kns",
  })
  @post("{id}")
  static createKns = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
