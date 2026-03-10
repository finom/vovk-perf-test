import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("t")
export default class TController {
  @operation({
    summary: "Get T",
  })
  @get()
  static getT = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create T",
  })
  @post("{id}")
  static createT = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
