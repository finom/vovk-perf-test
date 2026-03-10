import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hqy")
export default class HqyController {
  @operation({
    summary: "Get Hqy",
  })
  @get()
  static getHqy = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Hqy",
  })
  @post("{id}")
  static createHqy = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
