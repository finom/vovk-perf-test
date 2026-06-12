import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("kjv")
export default class KjvController {
  @operation({
    summary: "Get Kjv",
  })
  @get()
  static getKjv = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Kjv",
  })
  @post("{id}")
  static createKjv = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
