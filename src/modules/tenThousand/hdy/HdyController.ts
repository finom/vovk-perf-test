import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hdy")
export default class HdyController {
  @operation({
    summary: "Get Hdy",
  })
  @get()
  static getHdy = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Hdy",
  })
  @post("{id}")
  static createHdy = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
