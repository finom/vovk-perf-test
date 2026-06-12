import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("kmc")
export default class KmcController {
  @operation({
    summary: "Get Kmc",
  })
  @get()
  static getKmc = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Kmc",
  })
  @post("{id}")
  static createKmc = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
