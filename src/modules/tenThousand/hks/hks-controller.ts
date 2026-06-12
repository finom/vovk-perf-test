import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hks")
export default class HksController {
  @operation({
    summary: "Get Hks",
  })
  @get()
  static getHks = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Hks",
  })
  @post("{id}")
  static createHks = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
