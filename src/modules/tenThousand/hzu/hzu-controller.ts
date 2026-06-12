import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hzu")
export default class HzuController {
  @operation({
    summary: "Get Hzu",
  })
  @get()
  static getHzu = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Hzu",
  })
  @post("{id}")
  static createHzu = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
