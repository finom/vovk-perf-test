import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("clb")
export default class ClbController {
  @operation({
    summary: "Get Clb",
  })
  @get()
  static getClb = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Clb",
  })
  @post("{id}")
  static createClb = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
