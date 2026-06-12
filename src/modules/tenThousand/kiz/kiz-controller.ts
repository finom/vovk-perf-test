import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("kiz")
export default class KizController {
  @operation({
    summary: "Get Kiz",
  })
  @get()
  static getKiz = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Kiz",
  })
  @post("{id}")
  static createKiz = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
