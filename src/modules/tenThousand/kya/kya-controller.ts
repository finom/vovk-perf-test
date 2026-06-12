import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("kya")
export default class KyaController {
  @operation({
    summary: "Get Kya",
  })
  @get()
  static getKya = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Kya",
  })
  @post("{id}")
  static createKya = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
