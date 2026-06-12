import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ktn")
export default class KtnController {
  @operation({
    summary: "Get Ktn",
  })
  @get()
  static getKtn = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ktn",
  })
  @post("{id}")
  static createKtn = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
