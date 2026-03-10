import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ify")
export default class IfyController {
  @operation({
    summary: "Get Ify",
  })
  @get()
  static getIfy = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ify",
  })
  @post("{id}")
  static createIfy = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
