import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("kxm")
export default class KxmController {
  @operation({
    summary: "Get Kxm",
  })
  @get()
  static getKxm = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Kxm",
  })
  @post("{id}")
  static createKxm = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
