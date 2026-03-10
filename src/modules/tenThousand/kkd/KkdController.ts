import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("kkd")
export default class KkdController {
  @operation({
    summary: "Get Kkd",
  })
  @get()
  static getKkd = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Kkd",
  })
  @post("{id}")
  static createKkd = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
