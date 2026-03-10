import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hqh")
export default class HqhController {
  @operation({
    summary: "Get Hqh",
  })
  @get()
  static getHqh = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Hqh",
  })
  @post("{id}")
  static createHqh = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
