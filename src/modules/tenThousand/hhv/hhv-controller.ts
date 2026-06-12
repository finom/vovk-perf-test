import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hhv")
export default class HhvController {
  @operation({
    summary: "Get Hhv",
  })
  @get()
  static getHhv = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Hhv",
  })
  @post("{id}")
  static createHhv = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
