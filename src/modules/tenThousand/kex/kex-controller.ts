import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("kex")
export default class KexController {
  @operation({
    summary: "Get Kex",
  })
  @get()
  static getKex = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Kex",
  })
  @post("{id}")
  static createKex = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
