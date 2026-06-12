import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hdd")
export default class HddController {
  @operation({
    summary: "Get Hdd",
  })
  @get()
  static getHdd = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Hdd",
  })
  @post("{id}")
  static createHdd = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
