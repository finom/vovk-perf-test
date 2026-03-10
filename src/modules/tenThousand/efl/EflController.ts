import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("efl")
export default class EflController {
  @operation({
    summary: "Get Efl",
  })
  @get()
  static getEfl = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Efl",
  })
  @post("{id}")
  static createEfl = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
