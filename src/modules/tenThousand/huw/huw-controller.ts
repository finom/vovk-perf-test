import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("huw")
export default class HuwController {
  @operation({
    summary: "Get Huw",
  })
  @get()
  static getHuw = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Huw",
  })
  @post("{id}")
  static createHuw = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
