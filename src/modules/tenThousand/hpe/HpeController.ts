import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hpe")
export default class HpeController {
  @operation({
    summary: "Get Hpe",
  })
  @get()
  static getHpe = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Hpe",
  })
  @post("{id}")
  static createHpe = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
