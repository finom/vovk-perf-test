import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("isq")
export default class IsqController {
  @operation({
    summary: "Get Isq",
  })
  @get()
  static getIsq = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Isq",
  })
  @post("{id}")
  static createIsq = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
