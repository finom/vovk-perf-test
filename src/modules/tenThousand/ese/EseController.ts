import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ese")
export default class EseController {
  @operation({
    summary: "Get Ese",
  })
  @get()
  static getEse = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ese",
  })
  @post("{id}")
  static createEse = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
