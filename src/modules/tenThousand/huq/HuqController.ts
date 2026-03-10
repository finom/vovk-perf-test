import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("huq")
export default class HuqController {
  @operation({
    summary: "Get Huq",
  })
  @get()
  static getHuq = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Huq",
  })
  @post("{id}")
  static createHuq = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
