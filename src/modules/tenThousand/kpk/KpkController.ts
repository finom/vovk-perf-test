import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("kpk")
export default class KpkController {
  @operation({
    summary: "Get Kpk",
  })
  @get()
  static getKpk = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Kpk",
  })
  @post("{id}")
  static createKpk = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
