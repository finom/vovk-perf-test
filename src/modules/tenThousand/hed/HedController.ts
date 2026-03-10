import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hed")
export default class HedController {
  @operation({
    summary: "Get Hed",
  })
  @get()
  static getHed = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Hed",
  })
  @post("{id}")
  static createHed = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
