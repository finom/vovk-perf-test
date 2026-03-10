import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("kgm")
export default class KgmController {
  @operation({
    summary: "Get Kgm",
  })
  @get()
  static getKgm = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Kgm",
  })
  @post("{id}")
  static createKgm = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
