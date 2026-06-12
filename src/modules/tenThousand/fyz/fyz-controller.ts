import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fyz")
export default class FyzController {
  @operation({
    summary: "Get Fyz",
  })
  @get()
  static getFyz = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Fyz",
  })
  @post("{id}")
  static createFyz = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
