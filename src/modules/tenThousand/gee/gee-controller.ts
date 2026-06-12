import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gee")
export default class GeeController {
  @operation({
    summary: "Get Gee",
  })
  @get()
  static getGee = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Gee",
  })
  @post("{id}")
  static createGee = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
