import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("him")
export default class HimController {
  @operation({
    summary: "Get Him",
  })
  @get()
  static getHim = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Him",
  })
  @post("{id}")
  static createHim = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
