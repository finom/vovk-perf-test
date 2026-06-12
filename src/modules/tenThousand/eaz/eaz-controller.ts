import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("eaz")
export default class EazController {
  @operation({
    summary: "Get Eaz",
  })
  @get()
  static getEaz = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Eaz",
  })
  @post("{id}")
  static createEaz = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
