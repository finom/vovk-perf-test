import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hkt")
export default class HktController {
  @operation({
    summary: "Get Hkt",
  })
  @get()
  static getHkt = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Hkt",
  })
  @post("{id}")
  static createHkt = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
