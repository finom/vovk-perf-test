import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("koj")
export default class KojController {
  @operation({
    summary: "Get Koj",
  })
  @get()
  static getKoj = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Koj",
  })
  @post("{id}")
  static createKoj = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
