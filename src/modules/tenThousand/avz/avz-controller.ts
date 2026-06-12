import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("avz")
export default class AvzController {
  @operation({
    summary: "Get Avz",
  })
  @get()
  static getAvz = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Avz",
  })
  @post("{id}")
  static createAvz = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
