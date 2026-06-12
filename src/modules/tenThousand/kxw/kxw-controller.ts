import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("kxw")
export default class KxwController {
  @operation({
    summary: "Get Kxw",
  })
  @get()
  static getKxw = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Kxw",
  })
  @post("{id}")
  static createKxw = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
