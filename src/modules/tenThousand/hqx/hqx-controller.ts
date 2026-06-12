import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hqx")
export default class HqxController {
  @operation({
    summary: "Get Hqx",
  })
  @get()
  static getHqx = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Hqx",
  })
  @post("{id}")
  static createHqx = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
