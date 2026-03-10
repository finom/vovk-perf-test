import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("kpw")
export default class KpwController {
  @operation({
    summary: "Get Kpw",
  })
  @get()
  static getKpw = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Kpw",
  })
  @post("{id}")
  static createKpw = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
