import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("eti")
export default class EtiController {
  @operation({
    summary: "Get Eti",
  })
  @get()
  static getEti = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Eti",
  })
  @post("{id}")
  static createEti = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
