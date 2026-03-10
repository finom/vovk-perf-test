import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("yk")
export default class YkController {
  @operation({
    summary: "Get Yk",
  })
  @get()
  static getYk = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Yk",
  })
  @post("{id}")
  static createYk = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
