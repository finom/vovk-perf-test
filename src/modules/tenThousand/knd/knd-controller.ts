import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("knd")
export default class KndController {
  @operation({
    summary: "Get Knd",
  })
  @get()
  static getKnd = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Knd",
  })
  @post("{id}")
  static createKnd = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
