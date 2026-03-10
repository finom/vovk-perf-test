import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("kgw")
export default class KgwController {
  @operation({
    summary: "Get Kgw",
  })
  @get()
  static getKgw = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Kgw",
  })
  @post("{id}")
  static createKgw = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
