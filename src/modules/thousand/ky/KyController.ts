import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ky")
export default class KyController {
  @operation({
    summary: "Get Ky",
  })
  @get()
  static getKy = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ky",
  })
  @post("{id}")
  static createKy = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
