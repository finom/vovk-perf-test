import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("apm")
export default class ApmController {
  @operation({
    summary: "Get Apm",
  })
  @get()
  static getApm = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Apm",
  })
  @post("{id}")
  static createApm = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
