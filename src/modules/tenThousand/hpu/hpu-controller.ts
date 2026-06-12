import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hpu")
export default class HpuController {
  @operation({
    summary: "Get Hpu",
  })
  @get()
  static getHpu = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Hpu",
  })
  @post("{id}")
  static createHpu = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
