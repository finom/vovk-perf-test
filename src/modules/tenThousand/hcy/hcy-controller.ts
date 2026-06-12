import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hcy")
export default class HcyController {
  @operation({
    summary: "Get Hcy",
  })
  @get()
  static getHcy = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Hcy",
  })
  @post("{id}")
  static createHcy = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
