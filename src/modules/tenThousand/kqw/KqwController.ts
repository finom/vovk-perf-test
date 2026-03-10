import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("kqw")
export default class KqwController {
  @operation({
    summary: "Get Kqw",
  })
  @get()
  static getKqw = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Kqw",
  })
  @post("{id}")
  static createKqw = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
