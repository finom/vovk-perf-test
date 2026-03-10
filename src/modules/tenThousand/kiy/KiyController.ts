import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("kiy")
export default class KiyController {
  @operation({
    summary: "Get Kiy",
  })
  @get()
  static getKiy = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Kiy",
  })
  @post("{id}")
  static createKiy = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
