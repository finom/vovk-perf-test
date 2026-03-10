import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hob")
export default class HobController {
  @operation({
    summary: "Get Hob",
  })
  @get()
  static getHob = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Hob",
  })
  @post("{id}")
  static createHob = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
