import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hqi")
export default class HqiController {
  @operation({
    summary: "Get Hqi",
  })
  @get()
  static getHqi = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Hqi",
  })
  @post("{id}")
  static createHqi = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
