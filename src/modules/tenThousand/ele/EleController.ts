import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ele")
export default class EleController {
  @operation({
    summary: "Get Ele",
  })
  @get()
  static getEle = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ele",
  })
  @post("{id}")
  static createEle = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
