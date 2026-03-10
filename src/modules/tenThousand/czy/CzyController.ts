import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("czy")
export default class CzyController {
  @operation({
    summary: "Get Czy",
  })
  @get()
  static getCzy = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Czy",
  })
  @post("{id}")
  static createCzy = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
