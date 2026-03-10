import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("aef")
export default class AefController {
  @operation({
    summary: "Get Aef",
  })
  @get()
  static getAef = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Aef",
  })
  @post("{id}")
  static createAef = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
