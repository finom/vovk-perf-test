import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hrr")
export default class HrrController {
  @operation({
    summary: "Get Hrr",
  })
  @get()
  static getHrr = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Hrr",
  })
  @post("{id}")
  static createHrr = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
