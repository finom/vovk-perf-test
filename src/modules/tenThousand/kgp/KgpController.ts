import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("kgp")
export default class KgpController {
  @operation({
    summary: "Get Kgp",
  })
  @get()
  static getKgp = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Kgp",
  })
  @post("{id}")
  static createKgp = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
