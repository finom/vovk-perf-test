import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hin")
export default class HinController {
  @operation({
    summary: "Get Hin",
  })
  @get()
  static getHin = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Hin",
  })
  @post("{id}")
  static createHin = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
