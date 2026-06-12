import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("kpd")
export default class KpdController {
  @operation({
    summary: "Get Kpd",
  })
  @get()
  static getKpd = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Kpd",
  })
  @post("{id}")
  static createKpd = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
