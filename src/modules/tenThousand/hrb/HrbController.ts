import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hrb")
export default class HrbController {
  @operation({
    summary: "Get Hrb",
  })
  @get()
  static getHrb = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Hrb",
  })
  @post("{id}")
  static createHrb = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
