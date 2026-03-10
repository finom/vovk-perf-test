import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("loq")
export default class LoqController {
  @operation({
    summary: "Get Loq",
  })
  @get()
  static getLoq = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Loq",
  })
  @post("{id}")
  static createLoq = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
