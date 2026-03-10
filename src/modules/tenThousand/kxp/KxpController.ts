import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("kxp")
export default class KxpController {
  @operation({
    summary: "Get Kxp",
  })
  @get()
  static getKxp = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Kxp",
  })
  @post("{id}")
  static createKxp = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
