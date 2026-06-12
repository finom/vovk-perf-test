import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ps")
export default class PsController {
  @operation({
    summary: "Get Ps",
  })
  @get()
  static getPs = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ps",
  })
  @post("{id}")
  static createPs = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
