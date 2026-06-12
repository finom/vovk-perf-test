import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("kc")
export default class KcController {
  @operation({
    summary: "Get Kc",
  })
  @get()
  static getKc = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Kc",
  })
  @post("{id}")
  static createKc = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
